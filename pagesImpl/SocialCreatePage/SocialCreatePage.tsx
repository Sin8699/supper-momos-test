import styles from "./SocialCreatePage.module.scss";
import { ReactElement, useCallback, useState } from "react";
import { WebLayout } from "../../components/layout/WebLayout/WebLayout";
import CloudArrowUpIcon from "@heroicons/react/24/solid/CloudArrowUpIcon";
import MapPinIcon from "@heroicons/react/24/solid/MapPinIcon";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import CalendarIcon from "@heroicons/react/24/solid/CalendarIcon";

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
import SettingBlock from "./components/SettingBlock/SettingBlock";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import CapacityPriceField from "./components/VenueCapacityPriceField/VenueCapacityPriceField";
import VenueCapacityPriceField from "./components/VenueCapacityPriceField/VenueCapacityPriceField";
import DateTimeField from "./components/DateTimeField/DateTimeField";

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
    const h = dayjs(time).hour();
    const m = dayjs(time).minute();
    const s = dayjs(time).second();

    const dateTime = dayjs(startDate)
      .set("hour", h)
      .set("minute", m)
      .set("second", s);

    const { capacity, price, ...requestData } = data;

    createSocial({
      ...requestData,
      startAt: dateTime.toISOString(),
      capacity: Number(capacity),
      price: Number(price),
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
                          <div
                            className={classNames(
                              styles.frameParent,
                              showDetail && styles.view
                            )}
                          >
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

                            <DateTimeField
                              control={control}
                              errors={errors}
                              register={register}
                              showDetail={showDetail}
                            />

                            <VenueCapacityPriceField
                              control={control}
                              errors={errors}
                              register={register}
                              showDetail={showDetail}
                            />
                          </div>
                          <DescriptionField
                            control={control}
                            errors={errors}
                            register={register}
                            showDetail={showDetail}
                          />
                          {!showDetail && (
                            <>
                              <SettingBlock
                                control={control}
                                errors={errors}
                                register={register}
                              />
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
