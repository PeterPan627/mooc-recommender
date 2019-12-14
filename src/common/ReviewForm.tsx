import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
interface Props {
    courseId: string;
    className?: string;
    submit: (text: string, rating: number) => any;
}
function ReviewForm(props: Props) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const submit = () => {
        props.submit(text, rating).then((res: boolean) => {
            if (res) {
                setRating(0);
                setText('');
            }
        });
    };
    return (
        <div className={props.className}>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="h4" style={{ textAlign: 'center' }}>
                    Write Review
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(_, newValue: number) => {
                                setRating(newValue);
                            }}
                        />
                        <Button style={{ flexGrow: 0 }} onClick={submit}>
                            Submit
                        </Button>
                    </div>
                    <TextField
                        label="Text"
                        type="text"
                        name="text"
                        multiline={true}
                        autoComplete="text"
                        margin="normal"
                        variant="outlined"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        rows={2}
                        rowsMax={4}
                        style={{ width: '50%' }}
                    />
                </div>
            </Box>
        </div>
    );
}

export default ReviewForm;
