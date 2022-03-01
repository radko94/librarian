import IBaseModel from "./base.model";
import ISubgenre from "./subgenre.model";

export default interface IGenre extends IBaseModel {
  subgenres: ISubgenre[];
}
