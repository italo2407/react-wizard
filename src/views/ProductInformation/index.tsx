import React, {useState} from "react";
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import img1 from '../../assets/img/group.svg';
import img2 from '../../assets/img/group-3.svg';
import Utils from "../../utils";
import './style.scss'

const Step1 = (props: any) => {
    const { currentIndex, nextStep, prevStep, isLast } = props;
    const [isChecked, setIsChecked] = useState(false);

    const onChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <React.Fragment>
            <div id="step1">
                <div className="content">
                    <Title title={Utils.TITLE}/>
                    <section className="first-section">
                        <div className="center">
                            <img src={img1} alt="Imagen 1"/>
                            <p>
                                Guarda aquí todas tus contraseñas, datos o cualquier información,
                                olvida las notas de papel y las aplicaciones no protegidas
                            </p>
                        </div>
                        <div className="center">
                            <img src={img2} alt="Imagen 2"/>
                            <p>Crea tu clave maestra, solo tú podrás acceder a tus secretos con ella</p>
                        </div>
                    </section>
                    <section>
                        <h3>Como funciona</h3>
                        <p>
                            En primer lugar, debes crear una contraseña diferente para sus pertenencias
                            electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.
                        </p>
                    </section>
                    <section>
                        <h3>Qué datos puedes guardar</h3>
                        <p>
                            Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil,
                            el número de serie de algunos de tus dispositivos o cualquier información que necesites
                            tener en lugar seguro
                        </p>
                    </section>
                    <label className="container">He leído y acepto los términos.
                        <input type="checkbox" checked={isChecked} onChange={onChange}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <Footer currentIndex={currentIndex} nextStep={nextStep} prevStep={prevStep} isLast={isLast} isNextDisabled={!isChecked}/>
        </React.Fragment>

        
    )
}

export default Step1;