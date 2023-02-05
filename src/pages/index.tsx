import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import type { NextPage } from "next";
import { Box, Button } from "@mui/material";
import { useLiff } from "@/context/LiffProvider";


const Home: NextPage = () => {
  const { liff, liffError } = useLiff();

  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      height='100vh'
      sx={{
        background: 'linear-gradient(210.75deg, #F43B47 7.71%, #5F3A88 57%, #453A94 87.1%)',
      }}
    >
      <Box
        p={4}
        borderRadius={2}
        sx={{
          backgroundColor: 'white',
        }}
      >
        <h1>create-liff-app</h1>
        <Stack
          justifyContent='center'
          alignItems='center'
          gap={2}
        >
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            gap='2'
          >
            <p>Status :</p>
            {liff &&
              <Chip
                label="LIFF init succeeded."
              />
            }
            {liffError && (
              <>
                <p>LIFF init failed.</p>
                <p>
                  <code>{liffError}</code>
                </p>
              </>
            )}
          </Stack>
          <Button
            variant="contained"
            size="small"
            href="https://developers.line.biz/ja/docs/liff/"
            target="_blank"
            rel="noreferrer"
          >
            LIFF Documentation
          </Button>
        </Stack>
      </Box>
    </Stack >
  );
};

export default Home;
