export function Card( props) {
    return (
        <div ClassName="card h-100">
            <img ClassName="card-img-top" src="http://placehold.it/225x125" alt="" />
            <div ClassName="card-body">
                <h4 ClassName="card-title">Card title</h4>
                <p ClassName="card-text">{props.contenido}</p>
            </div>
            <div ClassName="card-footer">
                <a class="btn btn-primary" href="/#">Find Out More! &raquo;</a>
            </div>
      </div>
    )
}
