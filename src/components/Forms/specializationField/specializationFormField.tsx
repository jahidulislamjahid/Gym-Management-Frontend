import FormSelectField, { SelectOptions } from "../FormSelectField";

type ACDepartmentFieldProps = {
  name: string;
  label?: string;
};

const SpecializationFormField = ({ name, label }: ACDepartmentFieldProps) => {
  const data = [
    {
      label: "shafin",
      value: "shafin",
    },
  ];

  return (
    <FormSelectField
      name={name}
      label={label}
      options={data as SelectOptions[]}
    />
  );
};

export default SpecializationFormField;
