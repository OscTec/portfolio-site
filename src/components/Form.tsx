import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import "./Form.css";

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(100),
  company: z.string().min(1, { message: 'Company is required' }).max(100),
  email: z.string().email().min(3).max(100),
  message: z.string().min(10, { message: 'Message needs to be at least 10 characters' }).max(500),
});

type ContactFormData = z.infer<typeof schema>

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(schema)
  });

  const submit = (data: ContactFormData) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submit)} >
      <div>
        <label htmlFor="name" className="form-label">Name</label>
        <input {...register('name')} id="name" type="text" className="form-input" />
        {errors.name && <p className="form-error">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="company" className="form-label">Company</label>
        <input {...register('company')} id="company" type="text" className="form-input" />
        {errors.company && <p className="form-error">{errors.company.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="form-label">Email</label>
        <input {...register('email')} id="email" type="text" className="form-input" />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="form-label">Message</label>
        <textarea {...register('message')} id="message" className="form-input" />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>
      <button type="submit" className="form-submit">Submit</button>
    </form >
  )
}

export default Form