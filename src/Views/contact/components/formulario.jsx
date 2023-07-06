import React from 'react'
import { useForm } from "react-hook-form";
import contimg from '../../../components/imagenes/contact-image.png'

export const Formulario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section>
            <div className="contact-wrapper" id="contacto">
                <div className="contact-form">
                    <h1 className="titulo">Get in touch <br />
                        <span>We are hiring!</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label for="Nombre">Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                {...register("name", {
                                    required: true,
                                    maxLength: 40
                                })}
                            />
                            {errors.name?.type === 'required' && <p>El campo name es requerido</p>}
                            {errors.name?.type === 'maxLength' && <p>El campo name debe tener menos de
                                40 caracteres</p>}
                        </div>

                        <div className="separador">
                            <label for="Email">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder='e-mail'
                                {...register("email", {
                                    required: true,
                                    maxLength: 60
                                })}
                            />
                            {errors.email?.type === 'required' && <p>El campo e-mail es requerido</p>}
                            {errors.email?.type === 'maxLength' && <p>El campo e-mail debe tener menos de
                                20 caracteres</p>}
                        </div>
                        <div className="separador">
                            <label for="Telefono">Phone</label>
                            <input
                                type="text"
                                name='phone'
                                placeholder='phone'
                                {...register("phone", {
                                    required: true,
                                    maxLength: 15
                                })}
                            />
                            {errors.phone?.type === 'required' && <p>El campo phone es requerido</p>}
                            {errors.phone?.type === 'maxLength' && <p>El campo phone debe tener menos de
                                12 caracteres</p>}
                        </div>
                        <div className="separador-mensaje">
                            <label for="Mensaje">Message</label>
                            <input
                                type="text-area"
                                name='message'
                                placeholder='message'
                                {...register("message", {
                                    required: true,
                                    maxLength: 500
                                })}
                            />
                            {errors.message?.type === 'required' && <p>El campo message es requerido</p>}
                            {errors.message?.type === 'maxLength' && <p>El campo message debe tener menos de
                                100 caracteres</p>}
                        </div>
                        <div className="boton">
                            <button className="botoncito">Send</button>
                        </div>
                    </form>
                </div>
                <div>
                    <img src={contimg} alt="" />
                </div>
            </div>


        </section>
    )
}



