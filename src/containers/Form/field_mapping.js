import Select from "../../components/Fields/Select"
import Input from "../../components/Fields/Input"
import Checkboxes from "../../components/Fields/Checkboxes"
import Textarea from "../../components/Fields/Textarea"
import Checkbox from "../../components/Fields/Checkbox"

export const field_mapping = {
  options_select: Select,
  string_textfield: Input,
  email_default: Input,
  number: Input,
  options_buttons: Checkboxes,
  string_textarea: Textarea,
  boolean_checkbox: Checkbox,
};
