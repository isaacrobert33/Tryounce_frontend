import {
  BtnText,
  Button,
  GeneralText,
  Heading,
  Logo,
} from "../../components/index";

export default function EmailVerificationPassword() {
  return (
    <section className="container relative py-10">
      <Logo />

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center py-10 px-2 setting">
          <Heading title="Check your email" />
          <GeneralText>
            We&apos;ve sent a one time password to oloyed***vid10@gmail.com
          </GeneralText>
          <form
            className="w-full flex flex-col gap-6 mt-5"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <Button type="submit" className="bg-green-200">
              Verify
            </Button>
            <BtnText
              className="self-center"
              text1=" Didn’t receive code?"
              text2="Resend"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
