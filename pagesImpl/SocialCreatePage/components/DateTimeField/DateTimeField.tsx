import { SOCIAL_FIELDS } from "../../constants";

import s from "./DateTimeField.module.scss";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import classNames from "classnames";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import CalendarIcon from "@heroicons/react/24/solid/CalendarIcon";
import { InputDateTime } from "../../../../components/editor/InputDateTime/InputDateTime";
import { InputTime } from "../../../../components/editor/InputDateTime/InputTime";

interface DateTimeFieldProps {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  showDetail?: boolean;
}

export default function DateTimeField(props: DateTimeFieldProps) {
  const { register, control, errors, showDetail = false } = props;

  return (
    <div className={s.frameGroup}>
      <div className={s.mediaIconfilledcalendarParent}>
        <CalendarIcon className={classNames("h-12 w-12", s.iconForm)} />

        <Controller
          {...register(SOCIAL_FIELDS.DATE_START_AT, {
            required: "Date is required",
          })}
          control={control}
          render={({ field }) => (
            <InputDateTime
              className={classNames("w-[181px]", s.headingContainer)}
              defaultText="Date"
              // name={SOCIAL_FIELDS.DATE_START_AT}
              errors={errors?.[SOCIAL_FIELDS.DATE_START_AT]?.message as string}
              onChange={field.onChange}
              onlyView={showDetail}
            ></InputDateTime>
          )}
        />
      </div>
      <div className={s.mediaIconfilledclockParent}>
        <ClockIcon className={classNames("h-12 w-12", s.iconForm)} />

        <Controller
          {...register(SOCIAL_FIELDS.TIME_START_AT, {
            required: "Time is required",
          })}
          control={control}
          render={({ field }) => (
            <InputTime
              className={classNames("max-w-[181px]", s.headingContainer)}
              defaultText="Time"
              aria-invalid={
                errors?.[SOCIAL_FIELDS.TIME_START_AT] ? "true" : "false"
              }
              errors={errors?.[SOCIAL_FIELDS.TIME_START_AT]?.message as string}
              onChange={field.onChange}
              onlyView={showDetail}
            ></InputTime>
          )}
        />
      </div>
    </div>
  );
}
