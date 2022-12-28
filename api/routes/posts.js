import express from 'express';
import { 
    allPost, 
    showPost, 
    addPost, 
    deletePost, 
    updatePost 
} from '../controllers/postController.js';

const router = express.Router();

router.get('/', allPost) 
router.get('/:id', showPost) 
router.post('/', addPost) 
router.delete('/:id', deletePost) 
router.put('/:id', updatePost) 

export default router;