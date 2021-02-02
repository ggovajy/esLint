import React, { Component } from 'react';
import styles from './TodoListTemplate.module.css';
const TodoListTemplate =({ form, palette, children})=>{
    return(
        <main className={`${styles.todoListTemplate}`}>
            <div className={`${styles.title}`}>
                Make List - ref.velopert
            </div>
            <section className={`${styles.paletteWrapper}`}>
                {palette}
            </section>
            <section className={`${styles.formWrapper}`}>
                {form}
            </section>
            <section className={`${styles.todosWrapper}`}>
                { children }
            </section>
        </main>
    );
}

export default TodoListTemplate;