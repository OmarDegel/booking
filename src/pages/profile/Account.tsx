import { useTranslation } from "react-i18next";
import axios from "axios";
import Text from "../../components/form/inputs/Text";
import { useEffect, useState } from "react";
import { ProfileDropZone } from "../../components/ui/ProfileDropZone";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setUser } from "../../store/user/userSlice";

function Account() {
  const { t } = useTranslation("common");
  const { user, loading, token } = useAppSelector((state) => state.user);
  const data = user;

  const dispatch = useAppDispatch();

  const genderOptions = [
    { value: "male", label: t("profile.male") },
    { value: "female", label: t("profile.female") },
    { value: "other", label: "profile.other" },
  ];

  const [submitLoading, setSubmitLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth_date, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  useEffect(() => {
    if (data) {
      setFirstName(data.first_name || "");
      setLastName(data.last_name || "");
      setPhone(data.phone || "");
      setDateOfBirth(data.birth_date || "");
      setGender(data.gender || "");
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    setErrors({});

    try {
      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("phone", phone);
      formData.append("birth_date", birth_date);
      formData.append("gender", gender);
      if (avatar) formData.append("image", avatar);

      const res = await axios.post("/profile/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(res.data.message);
      dispatch(setUser(res.data.data));
    } catch (error: any) {
      const errorData = error.response?.data;
      if (errorData?.errors) setErrors(errorData.errors);
      toast.error(errorData?.message || "Failed to submit");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-10 h-10 border-4 border-t-primary border-border rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-foreground mb-6">
            {t("profile.my_account")}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl shadow-card p-7 flex flex-col items-start gap-4 shadow-md">
              <h2 className="text-lg font-semibold text-foreground">
                {t("profile.contact_info")}
              </h2>
              <ProfileDropZone setAvatar={setAvatar} avatar={data?.image} />
              <div className="flex-1 flex flex-col sm:flex-row gap-5 items-start w-full">
                <Text
                  label={t("profile.email")}
                  name="email"
                  readOnly
                  defaultValue={data?.email}
                />
                <Text
                  label={t("profile.phone")}
                  name="phone"
                  error={errors?.phone?.[0]}
                  value={phone}
                  onChange={(e) => setPhone(e)}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card p-7 flex flex-col items-start gap-4 shadow-md mt-6">
              <h2 className="text-lg font-semibold text-foreground">
                {t("profile.personal_info")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
                <Text
                  label={t("profile.first_name")}
                  name="first_name"
                  value={first_name}
                  error={errors?.first_name?.[0]}
                  onChange={(e) => setFirstName(e)}
                />
                <Text
                  label={t("profile.last_name")}
                  name="last_name"
                  value={last_name}
                  error={errors?.last_name?.[0]}
                  onChange={(e) => setLastName(e)}
                />
                <Text
                  type="date"
                  label={t("profile.birth_date")}
                  name="birth_date"
                  value={birth_date}
                  error={errors?.birth_date?.[0]}
                  onChange={(e) => setDateOfBirth(e)}
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 rtl:text-right">
                    {t("profile.gender")}
                  </label>
                  <select
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full h-11 px-3 border rounded-md text-sm transition border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  >
                    {genderOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors?.gender?.[0] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.gender?.[0]}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 px-20 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              disabled={submitLoading}
            >
              {submitLoading ? t("profile.saving") : t("profile.save_changes")}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Account;
