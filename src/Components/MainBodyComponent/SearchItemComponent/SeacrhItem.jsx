import React from "react";
import {Button, Input} from "@material-ui/core";
import {useFormik} from "formik";
import {getCityData} from "../../Redux/CardReducer";
import {useDispatch} from "react-redux";

export const SearchItem = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            if (localStorage.length === 0) {
                localStorage.setItem("name", JSON.stringify([]))
            }
            if (localStorage.length > 0) {
                let d = JSON.parse(localStorage.getItem("name"))
                for (let i = 0; i < d.length; i++) {
                    if (d[i] === values.name) {
                        alert("city already added")
                    }
                }
            }
            dispatch(getCityData(values.name, 'ADD'))
            formik.resetForm()
        },
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    placeholder='Type here the city name' {...formik.getFieldProps('name')}
                    onChange={formik.handleChange} value={formik.values.name}
                />
                <Button type='submit'
                        variant='contained' color='primary'> Add City</Button>
            </form>
        </div>
    )
}