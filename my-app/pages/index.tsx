import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>the movie db</title>
        <meta name="description" content="next reactjs app for exploring movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the movies explorer
        </h1>
          <div className={styles.grid}>
              <Box
                  bg={useColorModeValue("white", "gray.800")}
                  mx={{ lg: 8 }}
                  display={{ lg: "flex" }}
                  maxW={{ lg: "5xl" }}
                  shadow={{ lg: "lg" }}
                  rounded={{ lg: "lg" }}
              >
                  <Box w={{ lg: "50%" }}>
                      <Box
                          h={{ base: 64, lg: "full" }}
                          rounded={{ lg: "lg" }}
                          bgSize="cover"
                          style={{
                              backgroundImage:
                                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                          }}
                      ></Box>
                  </Box>

                  <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
                      <chakra.h2
                          fontSize={{ base: "2xl", md: "3xl" }}
                          color={useColorModeValue("gray.800", "white")}
                          fontWeight="bold"
                      >
                          Build Your New{" "}
                          <chakra.span color={useColorModeValue("brand.600", "brand.400")}>
                              Idea
                          </chakra.span>
                      </chakra.h2>
                      <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                          modi reprehenderit vitae exercitationem aliquid dolores ullam
                          temporibus enim expedita aperiam mollitia iure consectetur dicta
                          tenetur, porro consequuntur saepe accusantium consequatur.
                      </chakra.p>

                      <Box mt={8}>
                          <Link

                              bg="gray.900"
                              color="gray.100"
                              px={5}
                              py={3}
                              fontWeight="semibold"
                              rounded="lg"
                              _hover={{ bg: "gray.800" }}
                          >
                              Start Now
                          </Link>
                      </Box>
                  </Box>
              </Box>
          </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="digital squad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
