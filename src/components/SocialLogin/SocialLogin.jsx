import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate()
  const handleGoogleSign = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name:result.user?.displayName
      };
      axiosPublic.post("/users",userInfo)
      .then(res=>{
        console.log(res.data);
        navigate("/")
      })
    });
  };

  return (
    <div>
      <div
        onClick={handleGoogleSign}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
      >
        <FcGoogle size={32} />

        <p>Continue with Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;
