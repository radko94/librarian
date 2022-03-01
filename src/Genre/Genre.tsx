import { Button } from "@material-ui/core";
import { IGenreProps } from "./GenreModels";
import genreStyles from "./GenreStyles";

export const Genre = (props: IGenreProps) => {
  const useStyles = genreStyles();

  return (
    <>
      {props.elements.map((element, index) => (
        <Button
          key={index}
          variant={props.activeIndex === index ? "contained" : "outlined"}
          className={useStyles.element}
          onClick={() => props.updateActiveIndex(index)}
        >
          {element.name}
        </Button>
      ))}
      {props.isSubgenreStep && (
        <Button
          variant={
            props.activeIndex === props.elements.length
              ? "contained"
              : "outlined"
          }
          className={useStyles.element}
          onClick={() => props.updateActiveIndex(props.elements.length)}
        >
          Add new
        </Button>
      )}
    </>
  );
};
