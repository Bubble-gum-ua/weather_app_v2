import React from "react";
import {Button, Input, makeStyles} from "@material-ui/core";
import {useFormik} from "formik";
import {getCityData} from "../../Redux/CardReducer";
import {useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({
    button: {
        background: "linear-gradient(115deg, #C5CED3 30%, #83CBCB)",
        color: "white"
    },
    input: {
        color: "white"
    }
}));

export const SearchItem = () => {
    const dispatch = useDispatch()
    const classes = useStyles();

    //here we use a search item, to search city and initial local storage

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            if (localStorage.length === 0) {
                localStorage.setItem("name", JSON.stringify([]))
            }
            if (values.name !== "") {
                dispatch(getCityData(values.name, 'ADD'))
                formik.resetForm()
            }
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    className={classes.input}
                    placeholder='Type here the city name' {...formik.getFieldProps('name')}
                    onChange={formik.handleChange} value={formik.values.name}
                />
                <Button type='submit'
                        variant='contained' className={classes.button}> Add City</Button>
            </form>
        </div>
    )
}