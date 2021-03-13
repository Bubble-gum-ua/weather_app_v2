import React from "react";
import {Button, Input} from "@material-ui/core";
import {useFormik} from "formik";
import {addCity, getCityData} from "../../Redux/CardReducer";
import {useDispatch} from "react-redux";

export const SearchItem = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
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