import { SOCIAL_FIELDS } from "../../constants";

import s from "./DescriptionField.module.scss";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { InputArea } from "../../../../components/editor/InputArea/InputArea";

interface DescriptionFieldProps {
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  showDetail?: boolean;
}

export default function DescriptionField(props: DescriptionFieldProps) {
  const { control, errors, showDetail = false } = props;

  return (
    <div className={s.textareaInputField}>
      <div className={s.inputWithLabel}>
        <Controller
          rules={{
            required: "Description is required",
          }}
          name={SOCIAL_FIELDS.DESCRIPTION}
          control={control}
          render={({ field }) => (
            <InputArea
              label="Description"
              className={s.input}
              defaultText="Description of your event.."
              aria-invalid={
                errors?.[SOCIAL_FIELDS.DESCRIPTION] ? "true" : "false"
              }
              errors={errors?.[SOCIAL_FIELDS.DESCRIPTION]?.message as string}
              onChange={field.onChange}
              onlyView={
                showDetail &&
                ((value) => (
                  <div
                    className={s.description}
                    dangerouslySetInnerHTML={{
                      __html: value as string,
                    }}
                  ></div>
                ))
              }
            />
          )}
        />
      </div>
      <div className={s.hintText}>This is a hint text to help user.</div>
    </div>
  );
}
