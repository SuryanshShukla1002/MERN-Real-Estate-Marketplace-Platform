export default function OAuth() {
  const handleGoogleClick = () => {
    try {
    } catch (error) {
      console.log("could not sign in whith google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
}
