import { useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required('required fullName'),
        email: yup.string().email().required('required mail'),
        age: yup.number().positive().integer().min(18).required('age required'),
        password: yup.string().min(4).max(18).required('need a password'),
        confirmPassword: yup.string().oneOf([yup.ref('password'),null]).required('need confirmation'),
    })
    const { handleSubmit, register, formState:{errors} } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data)
    }
    
    return(
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder="FullName" {...register('fullName')}/><br/>
            <p style={{color:'red'}}>{errors.fullName?.message}</p>
            <input type='text' placeholder="Email" {...register('email')}/><br/>
            <p style={{color:'red'}}>{errors.email?.message}</p>
            <input type='number' placeholder="Age" {...register('age')}/><br/>
            <p style={{color:'red'}}>{errors.age?.message}</p>
            <input type='password' placeholder="Password"{...register('password')}/><br/>
            <p style={{color:'red'}}>{errors.password?.message}</p>
            <input type='password' placeholder='ConfirmPassword'{...register('confirmPassword')}/><br/>
            <p style={{color:'red'}}>{errors.confirmPassword?.message}</p>
            <input type='submit'/>
        </form>
        
        </div>
    ) 
}
export default Form