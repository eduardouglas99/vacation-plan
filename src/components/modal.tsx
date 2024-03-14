import CalendarContext from "@/common/context";
import { useContext, useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { MultiSelect } from "react-multi-select-component";

const schema = z.object({
    names: z.array(z.object({
        label: z.string(),
        value: z.string()
    })),
    initialPeriod: z.string(),
    endPeriod: z.string(),
    title: z.string().min(1, { message: 'Required'}),
    description: z.string().min(1, { message: 'Required'}),
})
.refine(({initialPeriod, endPeriod}) => {
    const timeInitialPeriod = new Date(initialPeriod).getTime();
    const timeEndPeriod = new Date(endPeriod).getTime();
    return timeEndPeriod > timeInitialPeriod
}, {
    message: "Invalid period",
    path: ['endPeriod']
})

const participants = [
    { label: 'Sofia Santos', value: 'Sofia Santos' },
    { label: 'Gabriel Oliveira', value: 'Gabriel Oliveira' },
    { label: 'Laura Pereira', value: 'Laura Pereira' },
    { label: 'Pedro Almeida', value: 'Pedro Almeida' },
    { label: 'Isabela Costa', value: 'Isabela Costa' }
];

export default function Modal() {
    const { isModalOpen, ModalCalendarToogle } = useContext(CalendarContext);
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            names: [],
            initialPeriod: new Date().toISOString(),
            endPeriod: new Date().toISOString(),
            title: '',
            description: '',
        },
        reValidateMode: "onChange"
    })

    const onSubmit = (data: any) => {
        reset();
    }

    if (!isModalOpen) {
        return null;
    }

    return(
        <ModalOverlay>
            <ModalWrapper>
                <ModalHome>
                    <ModalTitle>Create a vacation plan</ModalTitle>
                    <CloseModal onClick={ModalCalendarToogle}/>
                    <FormModal onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <LabelForm htmlFor="names">Name(s)</LabelForm>
                            <Controller 
                                name="names"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <MultiSelect 
                                        options={participants}
                                        value={value}
                                        onChange={onChange}
                                        labelledBy="Select"
                                    />
                                )}
                            />
                            {errors.names && <ErrorValidation>{errors.names.message}</ErrorValidation>}
                        </div>

                        <WrapperDateBlockForm className="flex">
                            <DateBlockForm>
                                <LabelForm htmlFor="initialPeriod">Initial period</LabelForm>
                                <InputModal className="dateInputForm" type="date" id="initialPeriod" {...register('initialPeriod')}/>
                                {errors.initialPeriod && errors.initialPeriod?.message ? <ErrorValidation>{errors.initialPeriod.message}</ErrorValidation> : null}   
                            </DateBlockForm>

                            <DateBlockForm>
                                <LabelForm htmlFor="endPeriod">End Period</LabelForm>
                                <InputModal className="dateInputForm" type="date" id="endPeriod" {...register('endPeriod')} />
                                {errors.endPeriod && errors.endPeriod?.message ? <ErrorValidation>{errors.endPeriod.message}</ErrorValidation> : null}     
                            </DateBlockForm>
                        </WrapperDateBlockForm>

                        <div>
                            <LabelForm htmlFor="title">Title</LabelForm>
                            <InputModal type="text" id="title" {...register('title')} placeholder="Collective vacation"/>
                            {errors.title && <ErrorValidation>{errors.title.message}</ErrorValidation>}
                        </div>

                        <div>
                            <LabelForm htmlFor="description">Description</LabelForm>
                            <InputModal type="text" id="description" {...register('description')} placeholder="Some participant will be vacation on this period"/>
                            {errors.description && <ErrorValidation>{errors.description.message}</ErrorValidation>}
                        </div>

                        <ButtonSubmitModal type="submit">Submit</ButtonSubmitModal>
                    </FormModal>
                </ModalHome>
            </ModalWrapper>
        </ModalOverlay>
    )
}

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999999;
    padding: 0 30px;
`

const ModalWrapper = styled.div`
    width: 500px;
    height: 600px;
`

const ModalHome = styled.div`
    background: white;
    height:100%;
    width:100%;
    border-radius: 15px;
    padding: 30px;
    position: relative;
`

const ModalTitle = styled.h3`
    font-weight: 400;
`
const CloseModal = styled(IoMdClose)`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    color: #fff;
    border-top-right-radius: 8px;
    padding: 6px;
    transition: all .2s ease;
    color: #fff;
    border-radius: 50%;
    right: -11px;
    top: -12px;
    background-color: #2f2f2f;
    &:hover {
        background-color: #414141;
    }
`

const FormModal = styled.form`
    margin: 30px 0 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const LabelForm = styled.label`
    font-size: 12px;
    font-weight: 400;

`

const ErrorValidation = styled.span`
    color: red;
    font-size: 10px;
    position: absolute;
`

const InputModal = styled.input`
    height: 38px;
    padding: 0 10px;
    position: relative;
    outline: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: all .2s ease;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    max-width: 100%;
    width: 100%;
    &.dateInputForm {
        font-size: 14px;
    }
`

const WrapperDateBlockForm = styled.div`
    justify-content: space-between;
    @media only screen and (max-width: 580px) {
        flex-wrap: wrap;
    }
`

const DateBlockForm = styled.div`
    max-width: 200px;
    width: 100%;
    display: block;
    @media only screen and (max-width: 580px) {
        max-width: 100%;
    }
`

const ButtonSubmitModal = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    width: 80%;
    text-align: center;
    padding: 12px;
    background-color: #2f2f2f;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
    display: block;
    text-align: center;
    transition: all .2s ease;
    bottom: -90px;
    margin: 0 auto;
    &:hover {
        background-color: #414141;
    }
    @media only screen and (max-width: 580px) {
        bottom: -20px;
    }
`