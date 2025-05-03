import React from 'react';
import { Flex, Image, VStack, Text, Separator, Link, List, HStack, Timeline, Progress, SimpleGrid, Icon } from '@chakra-ui/react';
import { IoIosPin, IoIosMail } from 'react-icons/io';
import { MdPhone } from 'react-icons/md';

import { Tooltip } from '../components/ui/tooltip';
import { education, nameValue, public_link, work_experience } from '../types';

export default function TemplateOne({ personalData, printRef, profile }: any) {
	const determinedProficiency = (value: number) => {
		if (value <= 20) return 'Beginner';
		else if (value <= 40) return 'Elementary';
		else if (value <= 60) return 'Intermediate';
		else if (value <= 80) return 'Up.Intermediate';
		else if (value <= 90) return 'Advanced';
		else return 'Proficiency';
	};

	return (
		<Flex
			ref={printRef ? printRef : null}
			display={printRef ? 'none' : 'flex'}
			className={printRef ? 'a4-print' : 'a4-paper'}
			flexDirection={!printRef ? { base: 'column', sm: 'row' } : 'row'}
			bgColor='white'
			minW={!printRef ? { base: '100%', sm: '210mm' } : '210mm'}
			minH='297mm'
			borderRadius='md'
			shadow='2xl'
		>
			<VStack className='info' w={!printRef ? { base: '100%', sm: '70mm' } : '70mm'} bgColor='#434244' p='5' gap={1}>
				<Image h='40mm' aspectRatio='square' src={profile} border='4px solid white' borderRadius='50%' mt='2' shadow='lg' />
				<VStack w='100%' align='start' mt='3'>
					<Text color='white'>ABOUT ME</Text>
					<Text color='white' fontSize='xs'>
						{personalData.about_me}
					</Text>
				</VStack>
				<Separator w='100%' variant='solid' />
				<VStack w='100%' align='start' mt='3' pr={5}>
					<Text color='white'>LINKS</Text>
					<List.Root ml='5'>
						{personalData.public_link.map((link: public_link) => (
							<List.Item key={link.name}>
								<Tooltip showArrow content={link.url} positioning={{ placement: 'right' }} openDelay={0} closeDelay={100}>
									<Link color='white' fontSize='sm' href={link.url} target='_blank'>
										{link.name}
									</Link>
								</Tooltip>
							</List.Item>
						))}
					</List.Root>
				</VStack>
				<Separator w='100%' variant='solid' />
				<VStack w='100%' align='start' mt='3' pr={5}>
					<Text color='white'>REFERENCE</Text>
					{personalData.references.length > 0 ? (
						<Text></Text>
					) : (
						<Text color='white' fontSize='sm'>
							Available if needed.
						</Text>
					)}
				</VStack>
				<Separator w='100%' variant='solid' />
				<VStack w='100%' align='start' mt='3' pr={5}>
					<Text color='white'>HOBBIES</Text>
					<List.Root ml='5'>
						{personalData.hobbies.length > 0 &&
							personalData.hobbies.map((hobby: string) => (
								<List.Item key={hobby}>
									<Text color='white' fontSize='sm'>
										{hobby}
									</Text>
								</List.Item>
							))}
					</List.Root>
				</VStack>
				<Separator w='100%' variant='solid' />
				<VStack w='100%' align='start' mt='3' pr={5}>
					<Text color='white'>LANGUAGES</Text>
					<List.Root w='100%' ml='5'>
						{personalData.languages.length > 0 &&
							personalData.languages.map((language: nameValue) => (
								<List.Item key={language.name}>
									<HStack w='100%' justifyContent='space-between'>
										<Text color='white' fontSize='sm'>
											{language.name}
										</Text>
										<Tooltip showArrow content={`${language.value}%`} positioning={{ placement: 'left' }} openDelay={0} closeDelay={100}>
											<Text color='white' fontSize='sm'>
												{determinedProficiency(language.value)}
											</Text>
										</Tooltip>
									</HStack>
								</List.Item>
							))}
					</List.Root>
				</VStack>
			</VStack>
			<VStack className='detail' w={!printRef ? { base: '100%', sm: '140mm' } : '140mm'} p='5' gap={0}>
				<HStack flexDirection={!printRef ? { base: 'column', sm: 'row' } : 'row'} w='100%' alignContent='space-between' mt={!printRef ? { base: 0, sm: 7 } : 7}>
					<VStack flex='1.5' w='100%' alignItems='start' gap='0'>
						<Text fontFamily='Oswald' fontSize='2xl'>
							{personalData.first_name.toUpperCase()}
						</Text>
						<Text fontFamily='Oswald' fontSize='2xl'>
							{personalData.last_name.toUpperCase()}
						</Text>
						<Text color='gray' fontSize='sm'>
							{personalData.work_experience[0].position}
						</Text>
					</VStack>
					<VStack flex='1' w='100%' h='100%' alignItems='flex-start' gap='0' mt={!printRef ? { base: 0, sm: 3 } : 3}>
						<HStack alignItems='start'>
							<Icon mt={1}>
								<IoIosPin size={15} color='gray' />
							</Icon>
							<Text fontSize='sm'>{personalData.address}</Text>
						</HStack>
						<HStack>
							<Icon>
								<MdPhone size={15} color='gray' />
							</Icon>
							<Tooltip showArrow content='Contact me' positioning={{ placement: 'bottom' }} openDelay={0} closeDelay={100}>
								<Link
									fontSize='sm'
									href={`tel:+855${personalData.telephone.startsWith('0') ? personalData.telephone.substring(1).replaceAll(' ', '') : personalData.telephone.replaceAll(' ', '')}`}
								>
									{personalData.telephone}
								</Link>
							</Tooltip>
						</HStack>
						<HStack>
							<Icon>
								<IoIosMail size={15} color='gray' />
							</Icon>
							<Tooltip showArrow content='Send Email' positioning={{ placement: 'bottom' }} openDelay={0} closeDelay={100}>
								<Link fontSize='sm' href={`mailto:${personalData.email}`}>
									{personalData.email}
								</Link>
							</Tooltip>
						</HStack>
					</VStack>
				</HStack>
				<VStack w='100%' alignItems='start' mt={3} gap={2}>
					<Text fontSize='sm' fontWeight={'semibold'}>
						WORK EXPERENCE
					</Text>
					<Separator w='100%' variant='solid' />
					<Timeline.Root size='md'>
						{personalData.work_experience.map((experience: work_experience, index: number) => (
							<Timeline.Item key={index}>
								<Timeline.Connector>
									<Timeline.Separator />
									<Timeline.Indicator scale={0.5}></Timeline.Indicator>
								</Timeline.Connector>
								<Timeline.Content width='auto' gap={0}>
									<Timeline.Title>{experience.position}</Timeline.Title>
									<Timeline.Description>
										{experience.company} | {experience.duration}
									</Timeline.Description>
									{experience.responsibility.length > 0 && (
										<List.Root ml='4'>
											{experience.responsibility.map((responsible, idx) => (
												<List.Item key={`${index}-${idx}`}>
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
				<VStack w='100%' alignItems='start' gap={2}>
					<Text fontSize='sm' fontWeight={'semibold'}>
						EDUCATION
					</Text>
					<Separator w='100%' variant='solid' />
					<Timeline.Root size='md'>
						{personalData.education.map((education: education) => (
							<Timeline.Item key={education.school}>
								<Timeline.Connector>
									<Timeline.Separator />
									<Timeline.Indicator scale={0.5}></Timeline.Indicator>
								</Timeline.Connector>
								<Timeline.Content width='auto' gap={0}>
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
					<Text fontSize='sm' fontWeight='semibold'>
						TECHNICAL SKILLS
					</Text>
					<Separator w='100%' variant='solid' />
					<SimpleGrid w='100%' columns={!printRef ? { base: 1, sm: 2 } : 2} gapX={4} gapY={1}>
						{personalData.technical_skills.length > 0 &&
							personalData.technical_skills.map((skill: nameValue) => (
								<Progress.Root key={skill.name} min={0} max={100} value={skill.value} animated colorPalette='green' variant='outline' size='sm' shape='rounded'>
									<Progress.Label>{skill.name}</Progress.Label>
									<HStack>
										<Progress.Track flex='1'>
											<Progress.Range />
										</Progress.Track>
										<Progress.ValueText>{skill.value}%</Progress.ValueText>
									</HStack>
								</Progress.Root>
							))}
					</SimpleGrid>
				</VStack>
				<VStack w='100%' alignItems='start' mt={3}>
					<Text fontSize='sm' fontWeight='semibold'>
						SOFT SKILLS
					</Text>
					<Separator w='100%' variant='solid' />
					<SimpleGrid w='100%' columns={!printRef ? { base: 1, sm: 2 } : 2} gapX={4} gapY={1}>
						{personalData.soft_skils.length > 0 &&
							personalData.soft_skils.map((skill: nameValue) => (
								<Progress.Root key={skill.name} min={0} max={100} value={skill.value} colorPalette='green' variant='outline' size='sm' shape='rounded'>
									<Progress.Label>{skill.name}</Progress.Label>
									<HStack>
										<Progress.Track flex='1'>
											<Progress.Range />
										</Progress.Track>
										<Progress.ValueText>{skill.value}%</Progress.ValueText>
									</HStack>
								</Progress.Root>
							))}
					</SimpleGrid>
				</VStack>
			</VStack>
		</Flex>
	);
}
