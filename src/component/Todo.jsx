export default function Todo(prop) {
    return (
        <div className="row mt-2">
            <div className="col">
                <div className="input-group">

                    <input type="text" defaultValue={prop.task.task} className="form-control" />

                    <button className="btn btn-outline-primary " onClick={(e) => { MarkItemDone(e); }}>
                        Mark as done
                    </button>

                    <button className="btn btn-outline-danger " onClick={e => { DeleteItem(e, prop); }}>
                        Delete
                    </button>

                </div>
            </div>
        </div>
    );

}

function MarkItemDone(e) {
    const button = e.target;
    console.log(button.innerText);
    if (button.innerText == "Done") {
        button.innerText = "Mark as done";
    }
    else {
        button.innerText = "Done";
    }
    button.classList.toggle('btn-outline-primary');
    button.classList.toggle('btn-primary');
}

function DeleteItem(e, p) {
    const updatedList = p.list.filter((item, index) => index !== p.id);
    p.setList([...updatedList]);
}