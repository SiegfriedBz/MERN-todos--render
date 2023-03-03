import Button from "./shared/Button";

const EditNote = ({ note, changedNote, handleChange, handleSubmit }) => {
    const content = changedNote.content ? changedNote.content : note.content
    console.log('content', content)

    return (
            <form
                className='d-flex'
                onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="content"
                        value={content}
                        placeholder="Enter content"
                        onChange={handleChange}
                    />
                </div>
                <Button
                    className='btn btn-sm'
                >
                    <i className="fa-solid fa-cloud-arrow-up text-success"></i>
                </Button>
            </form>
    )
}

export default EditNote
