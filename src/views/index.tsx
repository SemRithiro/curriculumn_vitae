import React from 'react';
import { Flex, Image, VStack, Text, Separator, Link, List, HStack, Timeline, Progress, SimpleGrid, Icon } from '@chakra-ui/react';
import { IoIosPin, IoIosMail } from 'react-icons/io';
import { MdPhone } from 'react-icons/md';

import Profile from '../assets/imgs/profile.jpg';
import { personal_curriculumn_vitae as pcv } from '../constants/data';

export default function Index() {
	return (
		<Flex w='100%' justifyContent='center' p='5'>
			<Flex flexDirection={{ base: 'column', sm: 'row' }} bgColor='white' w='210mm' borderRadius='md' shadow='2xl'>
				<VStack w={{ base: '100%', sm: '70mm' }} bgColor='#434244' p='5'>
					<Image h='40mm' aspectRatio='square' src={Profile} borderRadius='50%' mt='2' />
					<VStack w='100%' align='start' mt='3'>
						<Text color='white'>ABOUT ME</Text>
						<Text color='white' fontSize='sm'>
							Spring Boot API, JS Frameworks (Node and React) and Python Dev.
						</Text>
					</VStack>
					<Separator w='100%' variant='solid' />
					<VStack w='100%' align='start' mt='3'>
						<Text color='white'>LINKS</Text>
						<List.Root ml='5'>
							{pcv.public_link.map((link) => (
								<List.Item>
									<Link color='white' fontSize='sm' href={link.url} target='_blank'>
										{link.name}
									</Link>
								</List.Item>
							))}
						</List.Root>
					</VStack>
					<Separator w='100%' variant='solid' />
					<VStack w='100%' align='start' mt='3'>
						<Text color='white'>REFERENCE</Text>
						{pcv.references.length > 0 ? (
							<Text>H</Text>
						) : (
							<Text color='white' fontSize='sm'>
								Available if needed.
							</Text>
						)}
					</VStack>
					<Separator w='100%' variant='solid' />
					<VStack w='100%' align='start' mt='3'>
						<Text color='white'>HOBBIES</Text>
						<List.Root ml='5'>
							<List.Item>
								<Text color='white' fontSize='sm'>
									Inventing
								</Text>
							</List.Item>
						</List.Root>
					</VStack>
				</VStack>
				<VStack flex='1' p='5'>
					<HStack flexDirection={{ base: 'column', sm: 'row' }} w='100%' alignContent='space-between' mt='7'>
						<VStack flex='1.5' alignItems='start' gap='0'>
							<Text fontFamily='Oswald-regular' fontSize='2xl'>
								{pcv.first_name.toUpperCase()}
							</Text>
							<Text fontFamily='Oswald-regular' fontSize='2xl'>
								{pcv.last_name.toUpperCase()}
							</Text>
							<Text color='gray' fontSize='sm'>
								{pcv.work_experience[0].position}
							</Text>
						</VStack>
						<VStack flex='1' h='100%' alignItems='flex-start' gap='0' mt={3}>
							<HStack alignItems='start'>
								<Icon mt={1}>
									<IoIosPin size={15} color='gray' />
								</Icon>
								<Text fontSize='sm'>{pcv.address}</Text>
							</HStack>
							<HStack>
								<Icon>
									<MdPhone size={15} color='gray' />
								</Icon>
								<Text fontSize='sm'>{pcv.telephone}</Text>
							</HStack>
							<HStack>
								<Icon>
									<IoIosMail size={15} color='gray' />
								</Icon>
								<Text fontSize='sm'>{pcv.email}</Text>
							</HStack>
						</VStack>
					</HStack>
					<VStack w='100%' alignItems='start' mt='5'>
						<Text fontSize='sm' fontFamily='Work_Sans_SemiBold'>
							WORK EXPERENCE
						</Text>
						<Separator w='100%' variant='solid' />
						<Timeline.Root size='md'>
							{pcv.work_experience.map((experience) => (
								<Timeline.Item>
									<Timeline.Connector>
										<Timeline.Separator />
										<Timeline.Indicator scale={0.5}></Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content width='auto'>
										<Timeline.Title>{experience.position}</Timeline.Title>
										<Timeline.Description>
											{experience.company} | {experience.duration}
										</Timeline.Description>
										{experience.responsibility.length > 0 && (
											<List.Root ml='4'>
												{experience.responsibility.map((responsible) => (
													<List.Item>
														<Text fontSize='xs'>{responsible}</Text>
													</List.Item>
												))}
											</List.Root>
										)}
									</Timeline.Content>
								</Timeline.Item>
							))}
						</Timeline.Root>
					</VStack>
					<VStack w='100%' alignItems='start'>
						<Text fontSize='sm' fontFamily='Work_Sans_SemiBold'>
							EDUCATION
						</Text>
						<Separator w='100%' variant='solid' />
						<Timeline.Root size='md'>
							{pcv.education.map((education) => (
								<Timeline.Item>
									<Timeline.Connector>
										<Timeline.Separator />
										<Timeline.Indicator scale={0.5}></Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content width='auto'>
										<Timeline.Title>{education.degree}</Timeline.Title>
										<Timeline.Description>
											{education.school} | {education.duration}
										</Timeline.Description>
									</Timeline.Content>
								</Timeline.Item>
							))}
						</Timeline.Root>
					</VStack>
					<VStack w='100%' alignItems='start'>
						<Text fontSize='sm' fontFamily='Work_Sans_SemiBold'>
							SKILLS
						</Text>
						<Separator w='100%' variant='solid' />
						<SimpleGrid w='100%' columns={{ base: 1, sm: 2 }} gap={4}>
							{pcv.skills.length > 0 &&
								pcv.skills.map((skill) => (
									<Progress.Root min={0} max={100} value={skill.value} colorPalette='green' variant='outline' size='sm' shape='rounded'>
										<Progress.Label>{skill.name}</Progress.Label>
										<Progress.Track>
											<Progress.Range />
										</Progress.Track>
									</Progress.Root>
								))}
						</SimpleGrid>
					</VStack>
					<VStack w='100%' alignItems='start' mt={3}>
						<Text fontSize='sm' fontFamily='Work_Sans_SemiBold'>
							LANGUAGES
						</Text>
						<Separator w='100%' variant='solid' />
						<SimpleGrid w='100%' columns={{ base: 1, sm: 2 }} gap='4'>
							{pcv.languages.length > 0 &&
								pcv.languages.map((language) => (
									<Progress.Root min={0} max={100} value={language.value} colorPalette='green' variant='outline' size='sm' shape='rounded'>
										<Progress.Label>{language.name}</Progress.Label>
										<Progress.Track>
											<Progress.Range />
										</Progress.Track>
									</Progress.Root>
								))}
						</SimpleGrid>
					</VStack>
				</VStack>
			</Flex>
		</Flex>
	);
}
