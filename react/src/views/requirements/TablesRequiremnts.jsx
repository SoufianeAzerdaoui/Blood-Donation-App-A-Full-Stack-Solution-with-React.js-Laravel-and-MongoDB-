import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TablesRequiremnts = () => {


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Measles (rubella) and MMR', 'One-Month Wait'

    ),
    createData('Influenza', 'Can Donate'),
    createData('Hepatitis B', 'Two-Week Wait'),
    createData('Cupcake', 'Can Donate'),
    createData('RSV', 'Can Donate'),
    createData('COVID-19 & Bivalant Boosters', 'Can Donate'),
    createData('Shingles (Shingrix)', 'Can Donate'),
    createData('Monkeypox', 'Can Donate'),
  ];
  function createDataTwo(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rowsTwo = [
    createDataTwo('HIV/AIDS, individuals at high risk and their partners	', 'Cannot Donate'

    ),
    createData('Cold and Flu: You should not donate today if you are currently experiencing symptoms of a “cold” or “flu”	', 'Cannot Donate'),
    createData('Diabetes, on or off medication and under control	', 'Can Donate '),
    createData('Non-viral Hepatitis, previous Hepatitis A	', 'Cannot Donate'),
    createData('Viral Hepatitis B, C, D	', 'Cannot Donate'),
    createData('Pregnancy', 'Cannot Donate'),
    createData('Pregnancy, after delivery, miscarriage, abortion	', 'Six-Week Wait'),
    createData('Menstruation', 'Can Donate'),
    createData('Cancer, treatment complete and disease-free; most types*	', 'One Year Wait '),
    createData('Chronic Fatigue Syndrome diagnosed by a physician	', 'Can not Donate'),
    createData('Multiple sclerosis, or MS	', 'Depends on treatment plan.'),
    createData('Rheumatoid Arthritis', 'Depends on treatment plan.'),
    createData('Lupus', 'Depends on treatment plan.'),
    createData('Crohn’s Disease	', 'Depends on treatment plan.'),
    createData('IBS', 'Depends on treatment plan.'),

  ];


  return (
    <div>
      <TableContainer component={Paper} className="pl-10 pr-15">
        <Table sx={{ minWidth: 650   }} aria-label="simple table" className='pl-10'>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <div class="max-w-screen-md mb-8 lg:mb-16">
      <h2 class="mb-4 text-3xl tracking-tight font-bold text-sky-400  pt-12 pl-10">Medical Conditions


      </h2>
      <p class="text-gray-500 sm:text-xl dark:text-gray-400 pt-2 pl-12 ">
      Review the list of medical conditions below to understand whether a condition or related treatment will impact your ability to donate blood.

      </p>
  </div>
      <TableContainer component={Paper} className="pl-10 pr-15 pb-5">
        <Table sx={{ minWidth: 650   }} aria-label="simple table" className='pl-10'>

          <TableBody>
            {rowsTwo.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}

export default TablesRequiremnts;
