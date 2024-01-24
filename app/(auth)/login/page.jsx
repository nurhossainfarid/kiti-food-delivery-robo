import Form from "@/components/shared/Form";

const LoginRegistrationPage = (props) => {
  const {login = false, feedback = false} = props;
  return (
    <div className="p-5" >
      <Form login={login} feedback={feedback}/>
    </div>
  )
}

export default LoginRegistrationPage;






