import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {},
  }),
);

const leftMenu = [
  { title: 'solomon4_1', path: '/solomon04/test/func' },
  { title: 'solomon4_2', path: '/solomon04/test/ChooseType' },
  { title: 'solomon4_Map', path: '/solomon04/test/mapTest' },
  { title: 'solomon4_4', path: '/solomon04/test/SearchPlace' },
];

const NativeSelects = () => {
  const classes = useStyles();
  const router = useRouter();
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState([]);

  const handleChange = (event) => {
    setMenu(event.target.value);
    console.log('ggova name ====' + name);
    console.log('ggova navName ====' + menu);

    router.push(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Menu</InputLabel>
        <Select
          native
          value={name}
          onChange={handleChange}
          inputProps={{
            name: 'Menu',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value={menu}></option>
          {leftMenu.map((text, index) => (
            <>
              <option value={text.path}>{text.title}</option>
            </>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default NativeSelects;
