export interface IActionsProps {
  isLastStep: boolean;
  backDisabled: boolean;
  nextDisabled: boolean;
  handleBack: () => void;
  handleNext: () => void;
}
