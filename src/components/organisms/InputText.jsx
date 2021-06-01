import React from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export default function InputText(props) {

    return (
        <div>
            <form style={{ display: "flex" }} onSubmit={props.handleSubmit} >
                <Input
                placeholder="Todo"
                inputProps={{
                    "aria-label": "Description"
                }}
                style={{ width: "90%" }}
                onChange={props.handleNewTask}
                />

                <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "10%" }}
                >
                Add
                </Button>
            </form>
        </div>
    )
}
