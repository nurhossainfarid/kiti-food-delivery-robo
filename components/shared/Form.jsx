import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";

const Form = (props) => {
  const { login, feedback } = props;
  return (
    <div>
      <form className="flex flex-col gap-5">
        {!login && (
          <>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>
          </>
        )}
        {login | !login && (
          <>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
              />
            </div>
          </>
        )}
        <button type="submit" className="btn bg-primary text-white hover:bg-deep_blue
        transition duration-300 ease-in-out hover:scale-110 ">
          {login ? "Login" : "Register"}
        </button>
        {feedback && (
          <>
            <div className="grid w-full items-center gap-2">
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
