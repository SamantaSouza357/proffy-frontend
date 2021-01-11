import React, { useState, FormEvent } from 'react';

import PageHeader from '../../componentes/PageHeader';
import TeacherItem,{Teacher} from '../../componentes/TeacherItem';

import Input from '../../componentes/input';
import Select from '../../componentes/Select';
import api from '../../services/api';
import './styles.css';



function TeacherList() {

    const [teachers, setTeacher] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

   async function searchTeachers (e: FormEvent) {
        e.preventDefault();

      const response  = await api.get('classes', {
          params: {
            subject,
            week_day,
            time
          }  
        })


      setTeacher(response.data);
    }
        return (
        <div id="page-teacher-list" className="container">

            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>

                <Select
                 name="subject" label=" Matéria"
                 value={subject}
                 onChange ={(e) => { setSubject(e.target.value)}}
                  options={[
                        {value: 'Artes', label:"Artes"},
                        {value: 'Geografia', label:"Geografia"},
                        {value: 'Biologia', label:"Biologia"},
                        {value: 'Educação Fisica', label:"Educação Fisica"},
                        {value: 'Matemática', label:"Matemática"},
                        {value: 'Historia', label:"Historia"},
                        {value: 'Ciencia', label:"Ciencia"},
                        {value: 'Fisica', label:"Fisica"},
                        {value: 'Quimica', label:"Quimica"},
                        {value: 'Português', label:"Português"},
                    ]}/>
                <Select
                 name="week-day" label=" Dia da Semana"
                 value={week_day}
                 onChange ={(e) => { setWeekDay(e.target.value)}}
                 options={[
                        {value: '0', label:"Domingo"},
                        {value: '1', label:"Segunda-Feira"},
                        {value: '2', label:"Terça-Feira"},
                        {value: '3', label:"Quarta-Feira"},
                        {value: '4 ', label:"Quinta-Feira"},
                        {value: '5', label:"Sexta-Feira"},
                        {value: '6', label:"Sabado"},

                    ]}/>
                  <Input type="time" name="time" label="Hora"
                     value={time}
                     onChange ={(e) => { setTime(e.target.value)
                     }}/>


                     <button type="submit">
                        Filtrar
                     </button>

                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return   <TeacherItem key={teacher.id} teacher={teacher}/>;
                })
                }

            </main>


        </div>
    )
}

export default TeacherList;