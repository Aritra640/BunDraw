import { authmodalAtom } from "@/state/modal_state/authmodalAtom";
import { useAtom } from "jotai";
import { useRef } from "react";

export function AuthModal() {
  const [auth, setAuth] = useAtom(authmodalAtom);

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (auth.status === "signin") {
      console.log("Signing in:", { username, password });
      // call signin API
    } else {
      console.log("Signing up:", { username, email, password });
      // call signup API
    }

    // Close modal
    setAuth({ ...auth, state: false });

    // Optional: clear inputs
    if (usernameRef.current) usernameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
  };

  if (!auth.state) return null; // modal hidden

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[9999]">
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "white",
            padding: "2rem",
            borderRadius: "10px",
            width: "90%",
            maxWidth: "400px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <button
            onClick={() => setAuth({ ...auth, state: false })}
            style={{
              position: "absolute",
              top: "0.7rem",
              right: "1rem",
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            className="text-black"
          >
            ×
          </button>

          <div className="flex justify-center items-center m-3">
            <h1 className="text-center font-bold text-black">
              {auth.status === "signin" ? "Sign In" : "Sign Up"}
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <input
                ref={usernameRef}
                type="text"
                className="text-center bg-slate-200 rounded-xl cursor-pointer text-black"
                placeholder="username"
                name="username"
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </div>

            {auth.status === "signup" && (
              <div>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  className="text-center bg-slate-200 rounded-xl cursor-pointer text-black"
                  placeholder="email"
                  required
                  style={{ width: "100%", padding: "0.5rem" }}
                />
              </div>
            )}

            <div>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                className="text-center bg-slate-200 rounded-xl cursor-pointer text-black"
                placeholder="password"
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-black rounded-xl p-2 cursor-pointer "
            >
              {auth.status === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "1rem" }} className="text-black">
            {auth.status === "signin" ? (
              <>
                Don’t have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setAuth({ ...auth, status: "signup" })}
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setAuth({ ...auth, status: "signin" })}
                >
                  Sign in
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
