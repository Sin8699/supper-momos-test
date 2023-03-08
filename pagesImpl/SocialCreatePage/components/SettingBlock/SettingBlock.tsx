import classNames from "classnames";
import { SOCIAL_FIELDS } from "../../constants";

import s from "./SettingBlock.module.scss";
import { ErrorMessage } from "../../../../components/ErrorMessage";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import PickTagSocial from "../PickTagSocial/PickTagSocial";

interface SettingBlockProps {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
}

export default function SettingBlock(props: SettingBlockProps) {
  const { register, control, errors } = props;

  return (
    <div className={s.sectionWrapper}>
      <div className={s.section2}>
        <div className={s.container2}>
          <div className={s.content2}>
            <div className={s.headingWrapper4}>
              <div className={s.heading}>Settings</div>
            </div>
            <div className={s.inputFieldBase}>
              <div className={s.inputWithLabel1}>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className={classNames(
                    s.checkboxBase,
                    "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700"
                  )}
                  // name={SOCIAL_FIELDS.IS_MANUAL_APPROVE}
                  {...register(SOCIAL_FIELDS.IS_MANUAL_APPROVE, {})}
                />
                <div className={s.label}>I want to approve attendees</div>
              </div>
              <div className={s.hintText1}>
                This is a hint text to help user.
              </div>
            </div>
            <div className={s.toggleParent}>
              <div className={s.toggle}>
                <div className={s.textAndSupportingText}>
                  <div
                    className={classNames(s.text6, "flex gap-3 items-center")}
                  >
                    Privacy
                    {errors?.[SOCIAL_FIELDS.PRIVACY]?.message && (
                      <ErrorMessage
                        errors={
                          errors?.[SOCIAL_FIELDS.PRIVACY]?.message as string
                        }
                      />
                    )}
                  </div>
                  <div className={s.supportingText} />
                </div>
              </div>
              <div className={s.checkboxParent}>
                <div className={s.checkbox1}>
                  <div className={s.input1}>
                    <input
                      id="helper-radio-4"
                      type="radio"
                      value="Public"
                      className={classNames(
                        s.checkboxBase1,
                        "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 "
                      )}
                      // name={SOCIAL_FIELDS.PRIVACY}
                      {...register(SOCIAL_FIELDS.PRIVACY, {
                        required: "Privacy is required",
                      })}
                      aria-invalid={
                        errors?.[SOCIAL_FIELDS.PRIVACY] ? "true" : "false"
                      }
                    />
                  </div>
                  <div className={s.textAndSupportingText1}>
                    <div className={s.supportingText1}>Public</div>
                  </div>
                </div>
                <div className={s.checkbox1}>
                  <div className={s.input1}>
                    <input
                      id="helper-radio-4"
                      type="radio"
                      value="Curated Audience"
                      className={classNames(
                        s.checkboxBase1,
                        "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 "
                      )}
                      // name={SOCIAL_FIELDS.PRIVACY}
                      {...register(SOCIAL_FIELDS.PRIVACY, {
                        required: "Privacy is required",
                      })}
                      aria-invalid={
                        errors?.[SOCIAL_FIELDS.PRIVACY] ? "true" : "false"
                      }
                    />
                  </div>
                  <div className={s.textAndSupportingText1}>
                    <div className={s.supportingText1}>Curated Audience</div>
                  </div>
                </div>
                <div className={s.checkbox1}>
                  <div className={s.input1}>
                    <input
                      id="helper-radio-4"
                      type="radio"
                      value="Community Only"
                      className={classNames(
                        s.checkboxBase1,
                        "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 "
                      )}
                      // name={SOCIAL_FIELDS.PRIVACY}
                      {...register(SOCIAL_FIELDS.PRIVACY, {
                        required: "Privacy is required",
                      })}
                      aria-invalid={
                        errors?.[SOCIAL_FIELDS.PRIVACY] ? "true" : "false"
                      }
                    />
                  </div>
                  <div className={s.textAndSupportingText1}>
                    <div className={s.supportingText1}>Community Only</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.toggle1}>
              <div className={s.textAndSupportingText}>
                <div className={s.text6}>Tag your social</div>
                <div className={s.supportingText4}>
                  Pick tags for our curation engine to work its magin
                </div>
              </div>
            </div>
            <Controller
              name={SOCIAL_FIELDS.TAGS}
              rules={{
                required: "Tags is required",
              }}
              control={control}
              render={({ field }) => (
                <PickTagSocial
                  tags={field?.value || []}
                  onChange={field.onChange}
                  aria-invalid={errors?.[SOCIAL_FIELDS.TAGS] ? "true" : "false"}
                  errors={errors?.[SOCIAL_FIELDS.TAGS]?.message as string}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
