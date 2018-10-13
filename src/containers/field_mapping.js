import Select from "../components/Fields/Select"
import Text from "../components/Fields/Text"
import Email from "../components/Fields/Email"
import Number from "../components/Fields/Number"
import Checkboxes from "../components/Fields/Checkboxes"
import Date from "../components/Fields/Date"
import Textarea from "../components/Fields/Textarea"
import Checkbox from "../components/Fields/Checkbox"

export const field_mapping = {
  select: Select,
  text: Text,
  email: Email,
  number: Number,
  checkboxes: Checkboxes,
  date: Date,
  text_long: Textarea,
  checkbox: Checkbox,
};
