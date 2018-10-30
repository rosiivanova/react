import Select from "../../components/Fields/Select"
import Text from "../../components/Fields/Text"
import Checkboxes from "../../components/Fields/Checkboxes"
import Textarea from "../../components/Fields/Textarea"
import Checkbox from "../../components/Fields/Checkbox"

export const field_mapping = {
  select: Select,
  text: Text,
  email: Text,
  number: Text,
  date: Text,
  checkboxes: Checkboxes,
  text_long: Textarea,
  checkbox: Checkbox,
};
