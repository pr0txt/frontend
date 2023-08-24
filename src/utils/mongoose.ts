/* eslint-disable sonarjs/no-duplicate-string */
import Job from '@/models/Job';
import Country from '@/models/Country';

export const getComments = async () => {
	return Job.aggregate([
		{
			$limit: 1,
		},
		{
			$project: {
				offset: {
					$range: [-6, 1],
				},
			},
		},
		{
			$project: {
				_id: 1,
				date: {
					$map: {
						input: '$offset',
						as: 'o',
						in: {
							$dateTrunc: {
								date: {
									$dateAdd: {
										startDate: '$$NOW',
										unit: 'day',
										amount: '$$o',
									},
								},
								unit: 'day',
							},
						},
					},
				},
			},
		},
		{
			$unwind: '$date',
		},
		{
			$lookup: {
				from: 'jobs',
				let: {
					dt: '$date',
				},
				pipeline: [
					{
						$match: {
							$and: [
								{
									$expr: {
										$eq: [
											{
												$dateTrunc: {
													date: { $toDate: '$_id' },
													unit: 'day',
												},
											},
											'$$dt',
										],
									},
								},
								{
									'origin.name': 'comment',
								},
								{
									'data.title': { $ne: '' },
								},
								{
									'data.content': { $ne: '' },
								},
							],
						},
					},
					{
						$count: 'cnt',
					},
				],
				as: 'records',
			},
		},
		{
			$project: {
				_id: 0,
				date: 1,
				count: {
					$ifNull: [
						{
							$first: '$records.cnt',
						},
						0,
					],
				},
			},
		},
	]);
};

export const getCountries = async () => {
	return Country.aggregate([
		{
			$lookup: {
				from: 'sites',
				let: { countryId: '$_id' },
				pipeline: [
					{
						$match: { $expr: { $eq: ['$countryId', '$$countryId'] } },
					},
					{
						$lookup: {
							from: 'jobs',
							let: { siteId: '$_id' },
							pipeline: [
								{
									$match: {
										$and: [
											{
												$expr: { $eq: ['$siteId', '$$siteId'] },
											},
											{
												'data.title': { $ne: '' },
											},
											{
												'data.content': { $ne: '' },
											},
										],
									},
								},
								{
									$project: {
										_id: 1,
									},
								},
							],
							as: 'jobs',
						},
					},
					{
						$addFields: {
							jobsCount: { $size: '$jobs' },
						},
					},
				],
				as: 'sites',
			},
		},
		{
			$unwind: '$sites',
		},
		{
			$sort: { 'sites.baseUrl': 1 },
		},
		{
			$group: {
				_id: '$_id',
				name: { $first: '$name' },
				publicBroadcasters: { $first: '$publicBroadcasters' },
				sites: { $push: '$sites' },
			},
		},
		{
			$project: {
				_id: 1,
				name: 1,
				publicBroadcasters: 1,
				sites: {
					_id: 1,
					baseUrl: 1,
					isActive: 1,
					jobsCount: 1,
				},
			},
		},
		{
			$sort: { name: 1, publicBroadcasters: 1 },
		},
	]);
};

export const getMessages = async () => {
	return Job.aggregate([
		{
			$limit: 1,
		},
		{
			$project: {
				offset: {
					$range: [-6, 1],
				},
			},
		},
		{
			$project: {
				_id: 1,
				date: {
					$map: {
						input: '$offset',
						as: 'o',
						in: {
							$dateTrunc: {
								date: {
									$dateAdd: {
										startDate: '$$NOW',
										unit: 'day',
										amount: '$$o',
									},
								},
								unit: 'day',
							},
						},
					},
				},
			},
		},
		{
			$unwind: '$date',
		},
		{
			$lookup: {
				from: 'jobs',
				let: {
					dt: '$date',
				},
				pipeline: [
					{
						$match: {
							$and: [
								{
									$expr: {
										$eq: [
											{
												$dateTrunc: {
													date: { $toDate: '$_id' },
													unit: 'day',
												},
											},
											'$$dt',
										],
									},
								},
								{
									'origin.name': 'message',
								},
								{
									'data.title': { $ne: '' },
								},
								{
									'data.content': { $ne: '' },
								},
							],
						},
					},
					{
						$count: 'cnt',
					},
				],
				as: 'records',
			},
		},
		{
			$project: {
				_id: 0,
				date: 1,
				count: {
					$ifNull: [
						{
							$first: '$records.cnt',
						},
						0,
					],
				},
			},
		},
	]);
};

export const getTotal = async () => {
	return Job.aggregate([
		{
			$match: {
				$and: [
					{
						'data.title': { $ne: '' },
					},
					{
						'data.content': { $ne: '' },
					},
				],
			},
		},
		{
			$group: {
				_id: '$origin.name',
				count: {
					$sum: 1,
				},
			},
		},
		{
			$project: {
				_id: 1,
				origin: '$_id',
				count: '$count',
			},
		},
		{
			$sort: {
				origin: 1,
			},
		},
	]);
};
