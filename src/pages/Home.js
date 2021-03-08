import React, { Fragment, useContext } from 'react'
import { Card } from '../components/Card'
import { Search } from '../components/Search'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
	const { loading, users } = useContext(GithubContext)

	return (
		<Fragment>
			<Search />

			<div className="row">

				{loading
					? <div className="d-flex align-items-center">
						<strong>Loading...</strong>
						<div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
					</div>
					: users.map(user => {
						return (
							<div className="col-sm-4 mb-4" key={user.id}>
								<Card user={user} />
							</div>
						)
					})}
			</div>
		</Fragment>
	)

}