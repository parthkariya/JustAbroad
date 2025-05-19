import React from 'react'

const Ielts_LessonDetailLesson = ({ getlistinner }) => {
    return (
        <div>
            {getlistinner && getlistinner.map((item, index) => {
                return (
                    <>
                        <p dangerouslySetInnerHTML={{
                            __html: item.name,
                        }}></p>
                        <p dangerouslySetInnerHTML={{
                            __html: item.description,
                        }}></p>
                    </>
                )
            })}
        </div>
    )
}

export default Ielts_LessonDetailLesson