import React from 'react'
import './form.css'

const Form = () => {
    return (
        <form className="formulario" action="https://formspree.io/wesleycarlosrb@gmail.com" method="POST">
            <div className="flex-itemm">
                <div className="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" />
                    </div>
                    <div class="col mb-1">
                        <input type="text" class="form-control" placeholder="Last name" />
                    </div>
                </div>
                <input class="form-control" placeholder="Email" type="email" />
                <input className="form-control mt-1" type="text" name="your-subject" size="32" placeholder="Assunto" />
                <textarea className="form-control mt-1" name="your-message" cols="33" rows="10" placeholder="Mensagem"></textarea>
                <button type="submit" className="mt-1 btn btn-purple btn-lg full-width">Enviar Mensagem</button>
            </div>
        </form>
    );
}

export default Form
