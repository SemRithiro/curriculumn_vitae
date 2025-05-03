import React, { useRef } from 'react';
import { Flex, Image, VStack, Text, Separator, Link, List, HStack, Timeline, Progress, SimpleGrid, Icon, Button } from '@chakra-ui/react';
import { useReactToPrint } from 'react-to-print';
import { IoIosPin, IoIosMail } from 'react-icons/io';
import { TiPrinter } from 'react-icons/ti';
import { MdPhone } from 'react-icons/md';

import Profile from '../assets/imgs/profile.jpg';

import { Tooltip } from '../components/ui/tooltip';
import { personal_curriculumn_vitae } from '../constants/data';

import { education, nameValue, public_link, work_experience } from '../types';

export default function Index() {
	const printRef = useRef<HTMLDivElement>(null);
	const reactToPrintFn = useReactToPrint({
		contentRef: printRef,
	});

	return (
		<Flex w='100%' justifyContent='start' alignItems='center' flexDirection={{ base: 'row', md: 'column' }} p='5' gapY={4}>
			<Tooltip showArrow content='Print' positioning={{ placement: 'left' }} openDelay={0} closeDelay={100}>
				<Button
					onClick={reactToPrintFn}
					display={{ base: 'none', sm: 'block' }}
					className='print-button'
					zIndex='2000'
					bgColor='#547792'
					shadow='2xl'
					position='fixed'
					h='3.5rem'
					w='3.5rem'
					borderRadius='50%'
					bottom={5}
					right={5}
				>
					<TiPrinter color='white' />
				</Button>
			</Tooltip>
			<CVTemplate personalData={personal_curriculumn_vitae} />
			<CVTemplate printRef={printRef} personalData={personal_curriculumn_vitae} />
		</Flex>
	);
}

function CVTemplate({ personalData, printRef }: any) {
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
				<Image h='40mm' aspectRatio='square' src={Profile} borderRadius='50%' mt='2' shadow='lg' />
				<VStack w='100%' align='start' mt='3'>
					<Text color='white'>ABOUT ME</Text>
					<Text color='white' fontSize='xs'>
						{personalData.about_me}
					</Text>
				</VStack>
				<Separator w='100%' variant='solid' />
				<VStack w='100%' align='start' mt='3'>
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
				<VStack w='100%' align='start' mt='3'>
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
				<VStack w='100%' align='start' mt='3'>
					<Text color='white'>HOBBIES</Text>
					<List.Root ml='5'>
						{personalData.hobbies.length > 0 &&
							personalData.hobbies.map((hobbie: string) => (
								<List.Item key={hobbie}>
									<Text color='white' fontSize='sm'>
										{hobbie}
									</Text>
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
						SKILLS
					</Text>
					<Separator w='100%' variant='solid' />
					<SimpleGrid w='100%' columns={!printRef ? { base: 1, sm: 2 } : 2} gapX={4} gapY={1}>
						{personalData.skills.length > 0 &&
							personalData.skills.map((skill: nameValue) => (
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
						LANGUAGES
					</Text>
					<Separator w='100%' variant='solid' />
					<SimpleGrid w='100%' columns={!printRef ? { base: 1, sm: 2 } : 2} gapX={4} gapY={1}>
						{personalData.languages.length > 0 &&
							personalData.languages.map((language: nameValue) => (
								<Progress.Root key={language.name} min={0} max={100} value={language.value} colorPalette='green' variant='outline' size='sm' shape='rounded'>
									<Progress.Label>{language.name}</Progress.Label>
									<HStack>
										<Progress.Track flex='1'>
											<Progress.Range />
										</Progress.Track>
										<Progress.ValueText>{language.value}%</Progress.ValueText>
									</HStack>
								</Progress.Root>
							))}
					</SimpleGrid>
				</VStack>
			</VStack>
		</Flex>
	);
}
