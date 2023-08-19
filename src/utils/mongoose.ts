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
				localField: '_id',
				foreignField: 'countryId',
				as: 'sites',
			},
		},
		{
			$unwind: '$sites',
		},
		{
			$lookup: {
				from: 'jobs',
				localField: 'sites._id',
				foreignField: 'siteId',
				as: 'sites.jobs',
			},
		},
		{
			$addFields: {
				'sites.jobsCount': {
					$size: '$sites.jobs',
				},
			},
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
	])
		.collation({ locale: 'de' })
		.sort({ name: 1, publicBroadcasters: 1 });
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
