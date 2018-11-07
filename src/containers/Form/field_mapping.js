import Select from "../../components/Fields/Select"
import Input from "../../components/Fields/Input"
import Checkboxes from "../../components/Fields/Checkboxes"
import Textarea from "../../components/Fields/Textarea"
import Checkbox from "../../components/Fields/Checkbox"

export const field_mapping = {
  select: Select,
  text: Input,
  email: Input,
  number: Input,
  date: Input,
  checkboxes: Checkboxes,
  text_long: Textarea,
  checkbox: Checkbox,
};
