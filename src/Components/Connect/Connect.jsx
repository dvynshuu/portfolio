import "./Connect.css";
import { useForm } from "react-hook-form";

export default function Connect() {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting, isSubmitSuccessful},
  } = useForm();

  const onSubmit = async(data) => console.log(data);

  return (
    <div className="Connect">
      <div className="connect-navbar">
        <div className="header">
          <a href="/">
            <span className="singh1">SINGH D.</span>
            <span className="singh2">SINGH D.</span>
          </a>
        </div>
        <div className="connect-back">
          <a href="/">
          <i className="fa-solid fa-xmark"></i>
          </a>
          
        </div>
      </div>

      <div className="heading">
        <h1>
          Thanks for taking the time to reach out.
          <br />
          How can I help you today?
        </h1>
      </div>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Full Name"
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Your Email Address"
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              placeholder="Your Message"
            />
            {errors.message && (
              <span className="error">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>

          {/* Success Message */}
          {isSubmitSuccessful && (
            <p className="success">Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
}
