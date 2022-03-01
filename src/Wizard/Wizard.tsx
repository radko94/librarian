import React, { useState, useEffect } from "react";

import { Card } from "@material-ui/core";

import Info from "../Info";
import Genre from "../Genre";
import Actions from "../Actions";
import AddGenre from "../AddGenre";
import wizardStyles from "./WizardStyles";
import ProgressStepper from "../Stepper";

import { IStepHistory } from "./WizardModels";
import { HttpService, IGenre, ISubgenre } from "../HttpService";
import Success from "../Success";

export const Wizard = () => {
  const useStyles = wizardStyles();
  const httpService = HttpService();

  const [step, setStep] = useState<number>(0);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [elements, setElements] = useState<IGenre[] | ISubgenre[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const [backDisabled, setBackDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(true);
  const [stepperHistory, setStepperHistory] = useState<IStepHistory[]>([
    { step: 0, state: undefined },
  ]);
  const [successfullyAdded, setSuccessfullyAdded] = useState<boolean>(false);
  const [stepLabels, setStepLabels] = useState<string[]>([
    "Genre",
    "Subgenre",
    "Info",
  ]);

  useEffect(() => {
    setGenres(httpService.fetchGenres().genres);
  }, []);

  useEffect(() => {
    setElements(genres);
  }, [genres]);

  useEffect(() => {
    switch (step) {
      case 0:
        setBackDisabled(true);
        setElements(genres);
        break;
      case 1:
        setNextDisabled(true);
        setBackDisabled(false);
        setActiveIndex(undefined);
        setElements(genres[stepperHistory[0].state].subgenres);

        break;
      case 2:
        if (activeIndex === elements.length) {
          const stepsLabelsCopy = stepLabels.slice();
          stepsLabelsCopy.splice(2, 0, "Add new subgenre");

          setStepLabels(stepsLabelsCopy);
        }

        setNextDisabled(true);
        setActiveIndex(undefined);
        break;
      default:
        break;
    }
  }, [step]);

  const handleNext = () => {
    if (step !== stepLabels.length - 1) {
      const stepperHistoryCopy = stepperHistory.slice();

      if (
        stepperHistoryCopy[stepperHistoryCopy.length - 1].step === 0 ||
        stepperHistoryCopy[stepperHistoryCopy.length - 1].step === 1
      ) {
        stepperHistoryCopy[stepperHistoryCopy.length - 1].state = activeIndex;
      }

      setStepperHistory([
        ...stepperHistoryCopy,
        { step: step + 1, state: undefined },
      ]);

      setStep(step + 1);
    } else {
      setSuccessfullyAdded(true);
    }
  };

  const handleBack = () => {
    const stepperHistoryCopy = stepperHistory.slice();
    stepperHistoryCopy.pop();

    setStep(step - 1);
    setStepperHistory(stepperHistoryCopy);
  };

  const updateIndex = (index: number): void => {
    setActiveIndex(index);
    setNextDisabled(false);
  };

  const handleFormChange = (element: HTMLInputElement) => {
    const stepperHistoryCopy = stepperHistory.slice();
    const lastValue = stepperHistoryCopy.pop() as IStepHistory;

    lastValue.state = {
      ...lastValue.state,
      [element.name]: element.value ? element.value : element.checked,
    };

    setNextDisabled(false);
    setStepperHistory([...stepperHistoryCopy, lastValue]);
  };

  const onResetSteps = () => {
    setStep(0);
    setSuccessfullyAdded(false);
    setStepperHistory([{ step: 0, state: undefined }]);
  };

  const componentManager = () => {
    switch (step) {
      case 0:
      case 1:
        return (
          <Genre
            elements={elements}
            activeIndex={activeIndex}
            isSubgenreStep={step === 1}
            updateActiveIndex={updateIndex}
          />
        );
      case 2:
        const element =
          stepLabels.length === 4
            ? stepperHistory[stepperHistory.length - 1].state
            : genres[stepperHistory[0].state].subgenres[
                stepperHistory[1].state
              ];

        const descriptionRequired = element.isDescriptionRequired;

        return stepLabels.length === 4 ? (
          <AddGenre
            handleFormControlChange={(e) =>
              handleFormChange(e.target as HTMLInputElement)
            }
          />
        ) : (
          <Info
            isDescriptionRequired={descriptionRequired}
            handleFormControlChange={(e) =>
              handleFormChange(e.target as HTMLInputElement)
            }
          />
        );
      default:
        return (
          <Info
            isDescriptionRequired={descriptionRequired}
            handleFormControlChange={(e) =>
              handleFormChange(e.target as HTMLInputElement)
            }
          />
        );
    }
  };

  return (
    <Card className={useStyles.cardContainer}>
      {successfullyAdded ? (
        <Success onResetSteps={onResetSteps} />
      ) : (
        <>
          <h1 className={useStyles.cardContainerHeader}>Add book: New Book</h1>
          <ProgressStepper activatedStep={step} stepLabels={stepLabels} />
          <section className={useStyles.elementContainer}>
            {componentManager()}
          </section>
          <Actions
            isLastStep={step === stepLabels.length - 1}
            handleBack={handleBack}
            handleNext={handleNext}
            backDisabled={backDisabled}
            nextDisabled={nextDisabled}
          />
        </>
      )}
    </Card>
  );
};
