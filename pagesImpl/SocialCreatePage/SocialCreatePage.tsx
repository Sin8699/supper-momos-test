import styles from "./SocialCreatePage.module.scss";
import { ReactElement, useCallback, useState } from "react";
import { WebLayout } from "../../components/layout/WebLayout/WebLayout";
import CloudArrowUpIcon from "@heroicons/react/24/solid/CloudArrowUpIcon";
import MapPinIcon from "@heroicons/react/24/solid/MapPinIcon";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import CalendarIcon from "@heroicons/react/24/solid/CalendarIcon";
import UserGroupIcon from "@heroicons/react/24/solid/UserGroupIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import classNames from "classnames";
import { InputText } from "../../components/editor/InputText/InputText";
import UploadBannerModal from "./components/UploadBannerModal/UploadBannerModal";
import { InputDateTime } from "../../components/editor/InputDateTime/InputDateTime";
import { InputTime } from "../../components/editor/InputDateTime/InputTime";
import PickTagSocial from "./components/PickTagSocial/PickTagSocial";
import { InputArea } from "../../components/editor/InputArea/InputArea";
import { Controller, useForm } from "react-hook-form";
import { SOCIAL_FIELDS } from "./constants";
import { useMutationCreateSocial } from "./queries/get/useQuerySearchTitle";
import { ErrorMessage } from "../../components/ErrorMessage";
import dayjs from "dayjs";
import { pluralize } from "../../helpers/pluralize";
import { toast } from "react-toastify";

export const SocialCreatePage = () => {
  const [openBannerModal, setOpenBannerModal] = useState(false);

  const [showDetail, setShowDetail] = useState(false);

  const openModal = useCallback(() => {
    setOpenBannerModal(true);
  }, []);

  const { mutate: createSocial, data: response } = useMutationCreateSocial();
  console.log("response", response);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    getValues,
  } = useForm();
  console.log("errors", errors);

  const onSubmit = (data: any) => {
    const { time, startAt: startDate } = data;
    console.log("startDate", startDate);
    console.log("time", time);
    const h = dayjs(time).hour();
    const m = dayjs(time).minute();
    const s = dayjs(time).second();

    const dateTime = dayjs(startDate)
      .set("hour", h)
      .set("minute", m)
      .set("second", s);

    delete data.time;
    delete data.tags;
    console.log("-----------------", {
      ...data,
      startAt: dateTime.toISOString(),
    });

    createSocial({
      ...data,
      startAt: dateTime.toISOString(),
    });

    toast.success("Created successfully", {
      position: "top-center",
      autoClose: 5000,
    });
    setShowDetail(true);
  };

  const dateCreated = getValues();
  console.log("dateCreated", dateCreated);

  return (
    <>
      <div className={styles.createSocialParent}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.createSocial}>
          <div className={styles.imageParent}>
            <div className={styles.image} onClick={openModal}>
              <div className={styles.fiSrPicture1Parent}>
                <CloudArrowUpIcon className="h-6 w-6 " />

                <div className={styles.addABanner}>Add a banner</div>
              </div>
            </div>
            <img
              src={getValues()?.banner}
              className={classNames(styles.image, showDetail && "!border-0")}
              onClick={!showDetail ? openModal : undefined}
            />
            {errors?.[SOCIAL_FIELDS.BANNER]?.message && (
              <div className={styles.errorBanner}>
                <ErrorMessage
                  errors={errors?.[SOCIAL_FIELDS.BANNER]?.message as string}
                />
              </div>
            )}
            <div className={styles.heroHeaderSection}>
              <div className={styles.section}>
                <div className={styles.section1}>
                  <div className={styles.container1}>
                    <div className={styles.content1}>
                      <div className={styles.iconAndText}>
                        <div className={styles.headingAndSupportingText}>
                          <div className={styles.frameParent}>
                            <Controller
                              {...register(SOCIAL_FIELDS.TITLE, {
                                required: "Title is required",
                              })}
                              control={control}
                              render={({ field }) => (
                                <div className={styles.frameWrapper}>
                                  <InputText
                                    className={styles.headingWrapper}
                                    defaultText="Untitle Event"
                                    // name={SOCIAL_FIELDS.TITLE}
                                    aria-invalid={
                                      errors?.[SOCIAL_FIELDS.TITLE]
                                        ? "true"
                                        : "false"
                                    }
                                    errors={errors?.title?.message as string}
                                    onChange={field.onChange}
                                    onlyView={
                                      showDetail &&
                                      ((value) => (
                                        <div className={styles.frameWrapper}>
                                          <div
                                            className={styles.headingWrapper}
                                          >
                                            {value as string}
                                          </div>
                                        </div>
                                      ))
                                    }
                                  ></InputText>
                                </div>
                              )}
                            />
                            <div className={styles.frameGroup}>
                              <div
                                className={styles.mediaIconfilledcalendarParent}
                              >
                                <CalendarIcon
                                  className={classNames(
                                    "h-12 w-12",
                                    styles.iconForm
                                  )}
                                />

                                <Controller
                                  {...register(SOCIAL_FIELDS.DATE_START_AT, {
                                    required: "Date is required",
                                  })}
                                  control={control}
                                  render={({ field }) => (
                                    <InputDateTime
                                      className={classNames(
                                        "w-[181px]",
                                        styles.headingContainer
                                      )}
                                      defaultText="Date"
                                      // name={SOCIAL_FIELDS.DATE_START_AT}
                                      errors={
                                        errors?.[SOCIAL_FIELDS.DATE_START_AT]
                                          ?.message as string
                                      }
                                      onChange={field.onChange}
                                      onlyView={showDetail}
                                    ></InputDateTime>
                                  )}
                                />
                              </div>
                              <div
                                className={styles.mediaIconfilledclockParent}
                              >
                                <ClockIcon
                                  className={classNames(
                                    "h-12 w-12",
                                    styles.iconForm
                                  )}
                                />

                                <Controller
                                  {...register(SOCIAL_FIELDS.TIME_START_AT, {
                                    required: "Time is required",
                                  })}
                                  control={control}
                                  render={({ field }) => (
                                    <InputTime
                                      className={classNames(
                                        "max-w-[181px]",
                                        styles.headingContainer
                                      )}
                                      defaultText="Time"
                                      aria-invalid={
                                        errors?.[SOCIAL_FIELDS.TIME_START_AT]
                                          ? "true"
                                          : "false"
                                      }
                                      errors={
                                        errors?.[SOCIAL_FIELDS.TIME_START_AT]
                                          ?.message as string
                                      }
                                      onChange={field.onChange}
                                      onlyView={showDetail}
                                    ></InputTime>
                                  )}
                                />
                              </div>
                            </div>
                            <div className={styles.frameDiv}>
                              <div className={styles.frameParent1}>
                                <div
                                  className={
                                    styles.mediaIconfilledlocationMWrapper
                                  }
                                >
                                  <MapPinIcon
                                    className={classNames(
                                      "h-6 w-6",
                                      styles.iconForm
                                    )}
                                  />
                                </div>
                                <div className={styles.imageWrapper}>
                                  <Controller
                                    {...register(SOCIAL_FIELDS.VENUE, {
                                      required: "Venue is required",
                                    })}
                                    control={control}
                                    render={({ field }) => (
                                      <InputText
                                        defaultText="Venue"
                                        className={styles.headingWrapper1}
                                        aria-invalid={
                                          errors?.[SOCIAL_FIELDS.VENUE]
                                            ? "true"
                                            : "false"
                                        }
                                        errors={
                                          errors?.[SOCIAL_FIELDS.VENUE]
                                            ?.message as string
                                        }
                                        onChange={field.onChange}
                                        onlyView={showDetail}
                                      ></InputText>
                                    )}
                                  />
                                </div>
                              </div>
                              <div className={styles.frameParent2}>
                                <div
                                  className={
                                    styles.mediaIconfilleduserGroupParent
                                  }
                                >
                                  <UserGroupIcon
                                    className={classNames(
                                      "h-6 w-6",
                                      styles.iconForm
                                    )}
                                  />
                                  <Controller
                                    {...register(SOCIAL_FIELDS.CAPACITY, {
                                      required: "Capacity is required",
                                      valueAsNumber: true,
                                      validate: (value) =>
                                        value > 0 || "Not a Number",
                                    })}
                                    control={control}
                                    render={({ field }) => (
                                      <InputText
                                        defaultText="Max capacity"
                                        className={styles.headingWrapper2}
                                        // name={SOCIAL_FIELDS.CAPACITY}

                                        aria-invalid={
                                          errors?.[SOCIAL_FIELDS.CAPACITY]
                                            ? "true"
                                            : "false"
                                        }
                                        errors={
                                          errors?.[SOCIAL_FIELDS.CAPACITY]
                                            ?.message as string
                                        }
                                        onChange={field.onChange}
                                        onlyView={
                                          showDetail &&
                                          ((value) =>
                                            `${pluralize(
                                              "people",
                                              value as number
                                            )}`)
                                        }
                                      ></InputText>
                                    )}
                                  />
                                </div>
                                <div
                                  className={
                                    styles.mediaIconfilleduserGroupParent
                                  }
                                >
                                  <CurrencyDollarIcon
                                    className={classNames(
                                      "h-6 w-6",
                                      styles.iconForm
                                    )}
                                  />

                                  <Controller
                                    {...register(SOCIAL_FIELDS.PRICE, {
                                      validate: (value) =>
                                        value > 0 || "Not a Number",
                                      valueAsNumber: true,
                                    })}
                                    control={control}
                                    render={({ field }) => (
                                      <InputText
                                        defaultText="Cost per person"
                                        className={styles.headingWrapper2}
                                        // name={SOCIAL_FIELDS.PRICE}
                                        onChange={field.onChange}
                                        onlyView={
                                          showDetail && ((value) => `$${value}`)
                                        }
                                      ></InputText>
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.textareaInputField}>
                            <div className={styles.inputWithLabel}>
                              <div className={styles.label}>Description</div>
                              <Controller
                                {...register(SOCIAL_FIELDS.DESCRIPTION, {
                                  required: "Description is required",
                                })}
                                control={control}
                                render={({ field }) => (
                                  <InputArea
                                    className={styles.input}
                                    defaultText="Description of your event.."
                                    // name={SOCIAL_FIELDS.DESCRIPTION}

                                    aria-invalid={
                                      errors?.[SOCIAL_FIELDS.DESCRIPTION]
                                        ? "true"
                                        : "false"
                                    }
                                    errors={
                                      errors?.[SOCIAL_FIELDS.DESCRIPTION]
                                        ?.message as string
                                    }
                                    onChange={field.onChange}
                                    onlyView={
                                      showDetail &&
                                      ((value) => (
                                        <div
                                          className={styles.description}
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
                            <div className={styles.hintText}>
                              This is a hint text to help user.
                            </div>
                          </div>
                          {!showDetail && (
                            <>
                              <div className={styles.sectionWrapper}>
                                <div className={styles.section2}>
                                  <div className={styles.container2}>
                                    <div className={styles.content2}>
                                      <div className={styles.headingWrapper4}>
                                        <div className={styles.heading}>
                                          Settings
                                        </div>
                                      </div>
                                      <div className={styles.inputFieldBase}>
                                        <div className={styles.inputWithLabel1}>
                                          <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            value=""
                                            className={classNames(
                                              styles.checkboxBase,
                                              "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700"
                                            )}
                                            // name={SOCIAL_FIELDS.IS_MANUAL_APPROVE}
                                            {...register(
                                              SOCIAL_FIELDS.IS_MANUAL_APPROVE,
                                              {}
                                            )}
                                          />
                                          <div className={styles.label}>
                                            I want to approve attendees
                                          </div>
                                        </div>
                                        <div className={styles.hintText1}>
                                          This is a hint text to help user.
                                        </div>
                                      </div>
                                      <div className={styles.toggleParent}>
                                        <div className={styles.toggle}>
                                          <div
                                            className={
                                              styles.textAndSupportingText
                                            }
                                          >
                                            <div
                                              className={classNames(
                                                styles.text6,
                                                "flex gap-3 items-center"
                                              )}
                                            >
                                              Privacy
                                              {errors?.[SOCIAL_FIELDS.PRIVACY]
                                                ?.message && (
                                                <ErrorMessage
                                                  errors={
                                                    errors?.[
                                                      SOCIAL_FIELDS.PRIVACY
                                                    ]?.message as string
                                                  }
                                                />
                                              )}
                                            </div>
                                            <div
                                              className={styles.supportingText}
                                            />
                                          </div>
                                        </div>
                                        <div className={styles.checkboxParent}>
                                          <div className={styles.checkbox1}>
                                            <div className={styles.input1}>
                                              <input
                                                id="helper-radio-4"
                                                type="radio"
                                                value="Public"
                                                className={classNames(
                                                  styles.checkboxBase1,
                                                  "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 "
                                                )}
                                                // name={SOCIAL_FIELDS.PRIVACY}
                                                {...register(
                                                  SOCIAL_FIELDS.PRIVACY,
                                                  {
                                                    required:
                                                      "Privacy is required",
                                                  }
                                                )}
                                                aria-invalid={
                                                  errors?.[
                                                    SOCIAL_FIELDS.PRIVACY
                                                  ]
                                                    ? "true"
                                                    : "false"
                                                }
                                              />
                                            </div>
                                            <div
                                              className={
                                                styles.textAndSupportingText1
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.supportingText1
                                                }
                                              >
                                                Public
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.checkbox1}>
                                            <div className={styles.input1}>
                                              <input
                                                id="helper-radio-4"
                                                type="radio"
                                                value="Curated Audience"
                                                className={classNames(
                                                  styles.checkboxBase1,
                                                  "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 "
                                                )}
                                                // name={SOCIAL_FIELDS.PRIVACY}
                                                {...register(
                                                  SOCIAL_FIELDS.PRIVACY,
                                                  {
                                                    required:
                                                      "Privacy is required",
                                                  }
                                                )}
                                                aria-invalid={
                                                  errors?.[
                                                    SOCIAL_FIELDS.PRIVACY
                                                  ]
                                                    ? "true"
                                                    : "false"
                                                }
                                              />
                                            </div>
                                            <div
                                              className={
                                                styles.textAndSupportingText1
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.supportingText1
                                                }
                                              >
                                                Curated Audience
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.checkbox1}>
                                            <div className={styles.input1}>
                                              <input
                                                id="helper-radio-4"
                                                type="radio"
                                                value="Community Only"
                                                className={classNames(
                                                  styles.checkboxBase1,
                                                  "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 "
                                                )}
                                                // name={SOCIAL_FIELDS.PRIVACY}
                                                {...register(
                                                  SOCIAL_FIELDS.PRIVACY,
                                                  {
                                                    required:
                                                      "Privacy is required",
                                                  }
                                                )}
                                                aria-invalid={
                                                  errors?.[
                                                    SOCIAL_FIELDS.PRIVACY
                                                  ]
                                                    ? "true"
                                                    : "false"
                                                }
                                              />
                                            </div>
                                            <div
                                              className={
                                                styles.textAndSupportingText1
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.supportingText1
                                                }
                                              >
                                                Community Only
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styles.toggle1}>
                                        <div
                                          className={
                                            styles.textAndSupportingText
                                          }
                                        >
                                          <div className={styles.text6}>
                                            Tag your social
                                          </div>
                                          <div
                                            className={styles.supportingText4}
                                          >
                                            Pick tags for our curation engine to
                                            work its magin
                                          </div>
                                        </div>
                                      </div>
                                      <Controller
                                        {...register(SOCIAL_FIELDS.TAGS, {
                                          required: "Tags is required",
                                        })}
                                        control={control}
                                        render={({ field }) => (
                                          <PickTagSocial
                                            tags={field?.value || []}
                                            onChange={field.onChange}
                                            aria-invalid={
                                              errors?.[SOCIAL_FIELDS.TAGS]
                                                ? "true"
                                                : "false"
                                            }
                                            errors={
                                              errors?.[SOCIAL_FIELDS.TAGS]
                                                ?.message as string
                                            }
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className={styles.buttonBase5}
                              >
                                <div className={styles.text}>CREATE SOCIAL</div>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Controller
        {...register(SOCIAL_FIELDS.BANNER, {
          required: "Banner is required",
        })}
        control={control}
        render={({ field }) => (
          <UploadBannerModal
            open={openBannerModal}
            setOpen={setOpenBannerModal}
            onChange={field.onChange}
          />
        )}
      />
    </>
  );
};

const getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

SocialCreatePage.getLayout = getLayout;
