import {Router} from 'express';
import authorize from "../middlewares/auth.middlewares.js";
import {createSubscription} from "../controllers/subscription.controller.js";

const subscriptionRouter = new Router();

subscriptionRouter.get('/', (req, res) => res.send( {title: 'GET all subscription details'}));

subscriptionRouter.get('/:id', (req, res) => res.send( {title: 'GET all subscription details by id'}));

subscriptionRouter.post('/',authorize, createSubscription);

subscriptionRouter.put('/', (req, res) => res.send( {title: 'updates subscription details'}));

subscriptionRouter.delete('/', (req, res) => res.send( {title: 'deletes subscription details'}));

subscriptionRouter.get('/users/:id', (req, res) => res.send( {title: 'GET all the user subscription details'}));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send( {title: 'Cancels the users subscription details'}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send( {title: 'GET the upcoming renewals subscription details'}));

export default subscriptionRouter;