import Form from "@/components/shared/Form/Form";

const AuthPage = (props) => {
  const {login = false, feedback= false, order=false} = props;

  return (
    <div>
      <Form login={login} feedback={feedback} order={order}/>
    </div>
  )
}

export default AuthPage;

