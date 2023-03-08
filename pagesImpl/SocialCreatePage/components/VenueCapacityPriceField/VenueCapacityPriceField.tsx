import { SOCIAL_FIELDS } from "../../constants";

import s from "./VenueCapacityPriceField.module.scss";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { pluralize } from "../../../../helpers/pluralize";
import { InputText } from "../../../../components/editor/InputText/InputText";
import UserGroupIcon from "@heroicons/react/24/solid/UserGroupIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import classNames from "classnames";
import MapPinIcon from "@heroicons/react/24/solid/MapPinIcon";

interface VenueCapacityPriceFieldProps {
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  showDetail?: boolean;
}

export default function VenueCapacityPriceField(
  props: VenueCapacityPriceFieldProps
) {
  const { control, errors, showDetail = false } = props;

  return (
    <div className={s.frameDiv}>
      <div className={s.frameParent1}>
        <div className={s.mediaIconfilledlocationMWrapper}>
          <MapPinIcon className={classNames("h-6 w-6", s.iconForm)} />
        </div>
        <div className={s.imageWrapper}>
          <Controller
            name={SOCIAL_FIELDS.VENUE}
            rules={{
              required: "Venue is required",
            }}
            control={control}
            render={({ field }) => (
              <InputText
                defaultText="Venue"
                className={s.headingWrapper1}
                aria-invalid={errors?.[SOCIAL_FIELDS.VENUE] ? "true" : "false"}
                errors={errors?.[SOCIAL_FIELDS.VENUE]?.message as string}
                onChange={field.onChange}
                onlyView={showDetail}
              ></InputText>
            )}
          />
        </div>
      </div>
      <div className={s.frameParent2}>
        <div className={s.mediaIconfilleduserGroupParent}>
          <UserGroupIcon className={classNames("h-6 w-6", s.iconForm)} />
          <Controller
            name={SOCIAL_FIELDS.CAPACITY}
            rules={{
              required: "Capacity is required",
              validate: (value) => value > 0 || "Not a Number",
            }}
            control={control}
            render={({ field }) => (
              <InputText
                defaultText="Max capacity"
                className={s.headingWrapper2}
                // name={SOCIAL_FIELDS.CAPACITY}

                aria-invalid={
                  errors?.[SOCIAL_FIELDS.CAPACITY] ? "true" : "false"
                }
                errors={errors?.[SOCIAL_FIELDS.CAPACITY]?.message as string}
                onChange={field.onChange}
                onlyView={
                  showDetail &&
                  ((value) => `${pluralize("people", value as number)}`)
                }
              ></InputText>
            )}
          />
        </div>
        <div className={s.mediaIconfilleduserGroupParent}>
          <CurrencyDollarIcon className={classNames("h-6 w-6", s.iconForm)} />

          <Controller
            name={SOCIAL_FIELDS.PRICE}
            rules={{
              validate: (value) => value > 0 || "Not a Number",
            }}
            control={control}
            render={({ field }) => (
              <InputText
                defaultText="Cost per person"
                className={s.headingWrapper2}
                // name={SOCIAL_FIELDS.PRICE}
                onChange={field.onChange}
                onlyView={showDetail && ((value) => `$${value}`)}
              ></InputText>
            )}
          />
        </div>
      </div>
    </div>
  );
}
