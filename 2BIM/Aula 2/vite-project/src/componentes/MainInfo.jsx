function MainInfo() {
    return (
        <>
        <div className="mainInfo">
        <section id="info">
            <div className="personal-info">
                <h2>Informações Pessoais</h2>
                <p>Nome: João</p>
                <p>Email: joao@example.com</p>
                <p>Telefone: (00) 12345-6789</p>
            </div>
            <div className="skills">
                <h2>Habilidades</h2>
                <div className="skill-card">
                    <h3>HTML</h3>
                    <p>Nível: Avançado</p>
                </div>
                <div className="skill-card">
                    <h3>CSS</h3>
                    <p>Nível: Intermediário</p>
                </div>
                <div className="skill-card">
                    <h3>JavaScript</h3>
                    <p>Nível: Básico</p>
                </div>
            </div>
        </section>
        <section id="contact">
            <h2>Entre em Contato</h2>
            <form>
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </div>
     </>
     );
}

export default MainInfo;
